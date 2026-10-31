# ATOM — The Structure of Matter

An early, incomplete interactive educational website by Amir Saeid Dehghan. [فارسی](README_FA.md)

## Current features

- WebGL point clouds sampled from the squared real hydrogen wavefunctions for 1s, 2s, 2p-z and 3d-z². The distribution is truncated for visualization; color denotes wavefunction sign, not light. Drag to rotate and scroll to zoom. A textual fallback is shown when WebGL is unavailable.
- A short timeline of atomic theory, with historical models labelled as such.
- Hydrogen energy-level transitions, wavelengths, frequency and photon energy using an infinite-nuclear-mass approximation.

## Current limitations

This is an initial implementation, not the completed project in the brief. It does not yet include all 118 elements, an isotope laboratory, interactive historical 3D models, f orbitals, an isosurface renderer, a comparison mode, guided tour, full accessibility controls, authentic 3D model assets, a mobile performance study, or a comprehensive automated test suite. WebGL rendering was unavailable in the initial browser test. Orbital sampling and rendering need further scientific and visual validation. No performance targets are claimed.

## Run locally

Serve this directory over HTTP (rather than opening the file directly):

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. No build or npm install is required. The fonts are retrieved from Google Fonts when network access permits; system fallbacks are provided.

## Science and references

- [OpenStax Chemistry 2e](https://openstax.org/details/books/chemistry-2e)
- [NIST Atomic Spectra: hydrogen](https://physics.nist.gov/PhysRefData/Handbook/Tables/hydrogentable5.htm)
- [Chemistry LibreTexts: hydrogen atom](https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Quantum_Chemistry_with_Applications_in_Spectroscopy_(Fleming)/06%3A_The_Hydrogen_Atom)

This is an educational visualization: atoms are not rendered to scale and the classical hero image is conceptual. No third-party 3D assets are included.
