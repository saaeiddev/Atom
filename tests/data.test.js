import test from 'node:test';
import assert from 'node:assert/strict';
import {elements} from '../elements.js';
test('periodic dataset contains unique recognized atomic numbers and symbols',()=>{assert.equal(elements.length,118);assert.deepEqual(elements.map(e=>e.number),Array.from({length:118},(_,i)=>i+1));assert.equal(new Set(elements.map(e=>e.symbol)).size,118)});
test('known electron configurations and counts are present',()=>{assert.equal(elements[0].symbol,'H');assert.equal(elements[5].symbol,'C');assert.equal(elements[25].symbol,'Fe');assert.match(elements[23].electron_configuration_semantic,/3d5/);assert.equal(elements[117].symbol,'Og')});
