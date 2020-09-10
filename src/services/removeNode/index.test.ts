import removeNode from '.'

import Node from 'interfaces/Node'

describe('removeNode', () => {
  it('should add a directory node at root path', () => {
    const nodeTree: Node = {
      path: '/',
      name: '/',
      type: 'directory',
      childrens: [
        {
          path: '/src',
          name: 'src',
          type: 'directory',
          childrens: [
            {
              path: '/index.js',
              name: 'index.js',
              type: 'file'
            }
          ]
        },
        {
          path: '/dist',
          name: 'dist',
          type: 'directory',
          childrens: []
        }
      ]
    }

    removeNode({
      nodeTree,
      path: '/dist'
    })

    expect(nodeTree.childrens).toHaveLength(1)
  })
})
