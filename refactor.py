import os
import re

components_exports = """
export * from './buttons/Button.jsx';
export * from './buttons/IconButton.jsx';
export * from './navigation/SegmentedTabs.jsx';
export * from './data-display/Badge.jsx';
export * from './data-display/ModuleTag.jsx';
export * from './data-display/Card.jsx';
export * from './data-display/Avatar.jsx';
export * from './forms/Input.jsx';
"""
with open('src/components/index.js', 'w', encoding='utf-8') as f:
    f.write(components_exports.strip())

def refactor_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content
    
    # Export assignments
    content = re.sub(r'window\.([A-Z_]+)\s*=\s*(.+)', r'export const \1 = \2', content)
    content = content.replace('window.AppHeader = AppHeader;', 'export default AppHeader;')
    content = content.replace('window.AtlasView = AtlasView;', 'export default AtlasView;')
    content = content.replace('window.PathsView = PathsView;', 'export default PathsView;')
    content = content.replace('window.LessonsView = LessonsView;', 'export default LessonsView;')
    content = content.replace('window.ReviseView = ReviseView;', 'export default ReviseView;')
    content = content.replace('window.LessonContent = LessonContent;', 'export default LessonContent;')

    # Global references
    content = content.replace('window.Icons', 'Icons')
    content = content.replace('window.ATLAS', 'ATLAS')
    content = content.replace('window.PATHS', 'PATHS')
    content = content.replace('window.LESSONS', 'LESSONS')
    content = content.replace('window.REVISE', 'REVISE')

    # DS namespace
    if 'window.DataAnalystAcademyDesignSystem_f0f875' in content:
        imports = "import * as DS from '../components/index.js';\n"
        content = imports + content
        content = content.replace('window.DataAnalystAcademyDesignSystem_f0f875', 'DS')

    # Specific imports for views
    filename = os.path.basename(filepath)
    if filename in ['AppHeader.jsx', 'AtlasView.jsx', 'PathsView.jsx', 'LessonsView.jsx', 'ReviseView.jsx', 'LessonContent.jsx']:
        imports = "import React from 'react';\n"
        if filename != 'icons.jsx':
            imports += "import { Icons } from './icons.jsx';\n"
        if filename != 'data.js':
            imports += "import { ATLAS, PATHS, LESSONS, REVISE } from './data.js';\n"
        content = imports + content

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Refactored {filepath}")

for root, _, files in os.walk('src/views'):
    for f in files:
        if f.endswith('.jsx') or f.endswith('.js'):
            refactor_file(os.path.join(root, f))
