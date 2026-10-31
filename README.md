# ATOM — The Structure of Matter

Interactive educational atomic science website by Amir Saeid Dehghan. [راهنمای فارسی](README_FA.md)

## Features

- Probability-weighted 3D point clouds of real hydrogen-like 1s, 2s, 2p-z, 3d-z² and 4f-z³ wavefunctions. Rotate, zoom, pause and adjust point size. WebGL is used when available and a canvas projection otherwise.
- An interactive periodic table of 118 recognized elements, with search, atomic data and electron configurations.
- Eight example isotopes, a comparison of atomic-theory milestones, a historical timeline and a hydrogen transition calculator.

## Scientific context and limitations

An orbital is not an electron trajectory or an atomic photograph. Colors encode the sign of a real wavefunction; the cloud is finite random sampling of a truncated distribution. The hydrogen transition calculator uses an infinite-nuclear-mass approximation. Values for atomic weights and electron configurations are supplied by the dataset and some are uncertain or predicted. Radioactive decay times are probabilistic.

This is still a partial implementation of the larger brief. Historical comparisons use conceptual symbols, not interactive 3D historical models. The table selection does not update the orbital renderer; the renderer models hydrogen-like states only. Isosurfaces, arbitrary quantum numbers, exact many-electron calculations, particle selection, full-screen and screenshot controls, guided tour, quizzes, comprehensive accessibility, verified performance benchmarks, professional 3D assets and detailed cross-browser/mobile testing are not yet implemented.

## Local development

Run `npm test` for dataset checks. Run `npm start` and open http://localhost:8000. No package installation or build is needed. Google Fonts are optional and system fallbacks are provided.

## Data and attribution

Element dataset adapted from [Bowserinator/Periodic-Table-JSON](https://github.com/Bowserinator/Periodic-Table-JSON), [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/); data filtered to the first 118 elements and reduced to selected fields. The adapted `elements.js` remains under that license. No third-party 3D models are bundled.

Scientific references: [OpenStax Chemistry](https://openstax.org/details/books/chemistry-2e), [NIST Hydrogen](https://physics.nist.gov/PhysRefData/Handbook/Tables/hydrogentable1_a.htm), and [Chemistry LibreTexts: Hydrogen Atom](https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Quantum_Chemistry_with_Applications_in_Spectroscopy_(Fleming)/06%3A_The_Hydrogen_Atom). Isotopic half-lives are rounded educational values.

The GitHub Pages workflow is included, but deployment depends on repository Pages settings and is not proof that a live site exists.
