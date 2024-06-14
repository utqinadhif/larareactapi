import { createRoot } from 'react-dom/client';
import RouterApp from './RouterApp';
import React from 'react';
import '../css/app.css';

const root = createRoot(document.getElementById('app') as HTMLElement);
root.render(<RouterApp />);
