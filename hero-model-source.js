import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';

// Grab3D CC0 Atom Model: cropped to remove its display stand and recolored.
const host=document.querySelector('.hero-circle');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let renderer;
try {
  renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:'high-performance'});
} catch { /* The animated CSS illustration remains visible when WebGL is unavailable. */ }
if(renderer && host){
  renderer.setPixelRatio(Math.min(devicePixelRatio,1.6));
  renderer.outputColorSpace=THREE.SRGBColorSpace;
  renderer.toneMapping=THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure=1.3;
  renderer.domElement.className='hero-model-canvas';
  renderer.domElement.setAttribute('aria-label','Animated 3D conceptual atom model');
  renderer.domElement.setAttribute('role','img');
  host.append(renderer.domElement);
  const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(33,1,.01,50);
  camera.position.set(0,.2,5.8);
  scene.add(new THREE.HemisphereLight(0xb8ffff,0x192a14,2));
  const key=new THREE.DirectionalLight(0xdfff94,4);key.position.set(3,5,6);scene.add(key);
  const rim=new THREE.DirectionalLight(0x44daef,2.5);rim.position.set(-4,1,-3);scene.add(rim);
  const group=new THREE.Group();scene.add(group);
  const clock=new THREE.Clock();let ready=false,visible=true;
  new THREE.LoadingManager();
  new GLTFLoader().load(new URL('./assets/atom-model.glb',import.meta.url).href,({scene:model})=>{
    model.traverse(node=>{if(!node.isMesh)return;
      // The stand is part of the source mesh. Remove triangles below the orbit assembly.
      let geometry=node.geometry.clone();const positions=geometry.getAttribute('position');
      const source=geometry.index?Array.from(geometry.index.array):Array.from({length:positions.count},(_,i)=>i);
      const kept=[];for(let i=0;i<source.length;i+=3){const a=source[i],b=source[i+1],c=source[i+2];if(Math.min(positions.getY(a),positions.getY(b),positions.getY(c))>.050)kept.push(a,b,c)}
      geometry.setIndex(kept);geometry.computeVertexNormals();node.geometry=geometry;
      node.material=new THREE.MeshStandardMaterial({color:0xa9ed67,metalness:.68,roughness:.27,emissive:0x244617,emissiveIntensity:.33,side:THREE.DoubleSide});
    });
    model.position.set(0,-.135,0);group.add(model);group.scale.setScalar(15.5);group.rotation.set(.25,.2,-.15);
    host.classList.add('hero-model-ready');ready=true;
  },undefined,()=>{renderer.domElement.remove()});
  const resize=()=>{const r=host.getBoundingClientRect();if(!r.width||!r.height)return;renderer.setSize(r.width,r.height,false);camera.aspect=r.width/r.height;camera.updateProjectionMatrix()};
  new ResizeObserver(resize).observe(host);resize();
  const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting},{threshold:.01});observer.observe(host);
  function frame(){requestAnimationFrame(frame);const dt=Math.min(clock.getDelta(),.05);if(!visible||!ready)return;if(!reduced.matches){group.rotation.y+=dt*.32;group.rotation.x=.25+Math.sin(clock.elapsedTime*.35)*.13}renderer.render(scene,camera)}requestAnimationFrame(frame);
}
