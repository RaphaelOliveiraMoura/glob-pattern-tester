import renameNode from '.'

import Node from 'interfaces/Node'

describe('renameNode', () => {
  it('should rename a folder inside root path', () => {
    const nodeTree: Node = {
      path: '/',
      name: '/',
      type: 'directory',
      childrens: [
        {
          path: '/index.js',
          name: 'index.js',
          type: 'file'
        },
        {
          path: '/out',
          name: 'out',
          type: 'directory',
          childrens: []
        }
      ]
    }

    renameNode({
      nodeTree,
      path: '/out',
      nameToUpdate: 'dist'
    })

    expect(nodeTree.childrens?.[1]).toEqual(
      expect.objectContaining({
        path: '/dist',
        name: 'dist'
      })
    )
  })

  it('should rename a file inside root path', () => {
    const nodeTree: Node = {
      path: '/',
      name: '/',
      type: 'directory',
      childrens: [
        {
          path: '/index.js',
          name: 'index.js',
          type: 'file'
        }
      ]
    }

    renameNode({
      nodeTree,
      path: '/index.js',
      nameToUpdate: '.env'
    })

    expect(nodeTree.childrens?.[0]).toEqual(
      expect.objectContaining({
        path: '/.env',
        name: '.env'
      })
    )
  })
})
