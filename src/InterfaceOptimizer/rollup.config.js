// src/InterfaceOptimizer/rollup.config.js

import resolve from '@rollup/plugin-node-resolve';
import wasm from '@rollup-plugin-wasm';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
