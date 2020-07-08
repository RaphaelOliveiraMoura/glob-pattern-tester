import Node from 'interfaces/Node'

const rootFolder: Node = {
  path: '/',
  name: '/',
  type: 'directory',
  childrens: [
    { path: '/lib', name: 'lib', type: 'directory', childrens: [] },
    {
      path: '/bin',
      name: 'bin',
      type: 'directory',
      childrens: [
        {
          path: '/bin/etc',
          name: 'etc',
          type: 'directory',
          childrens: [
            { path: '/bin/etc/index.ts', name: 'index.ts', type: 'file' },
            { path: '/bin/etc/.prettierrc', name: '.prettierrc', type: 'file' }
          ]
        },
        { path: '/bin/index.ts', name: 'index.ts', type: 'file' },
        { path: '/bin/.prettierrc', name: '.prettierrc', type: 'file' }
      ]
    },
    {
      path: '/src',
      name: 'src',
      type: 'directory',
      childrens: [
        { path: '/src/index.tsx', name: 'index.tsx', type: 'file' },
        { path: '/src/.eslintrc', name: '.eslintrc', type: 'file' }
      ]
    }
  ]
}

export default rootFolder
