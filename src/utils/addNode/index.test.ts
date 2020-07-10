import addNode from '.'

import Node from 'interfaces/Node'

describe('addNode', () => {
  it('should add a directory node at root path', () => {
    const nodeTree: Node = {
      path: '/',
      name: '/',
      type: 'directory',
      childrens: []
    }

    const nodeToAdd: Node = {
      path: '/src',
      name: 'src',
      type: 'directory',
      childrens: []
    }

    addNode({
      nodeTree,
      nodeToAdd,
      path: '/'
    })

    expect(nodeTree.childrens).toContain(nodeToAdd)
  })

  it('should add a directory node at a subfolder path', () => {
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
              path: '/src/components',
              name: 'components',
              type: 'directory',
              childrens: []
            }
          ]
        }
      ]
    }

    const nodeToAdd: Node = {
      path: '/src/components/shared',
      name: 'shared',
      type: 'directory',
      childrens: []
    }

    addNode({
      nodeTree,
      nodeToAdd,
      path: '/src/components'
    })

    expect(nodeTree.childrens?.[0].childrens?.[0].childrens).toContain(
      nodeToAdd
    )
  })

  it('should add a file node at root path', () => {
    const nodeTree: Node = {
      path: '/',
      name: '/',
      type: 'directory',
      childrens: []
    }

    const nodeToAdd: Node = {
      path: '/index.js',
      name: 'index.js',
      type: 'file'
    }

    addNode({
      nodeTree,
      nodeToAdd,
      path: '/'
    })

    expect(nodeTree.childrens).toContain(nodeToAdd)
  })

  it('should add a file node at a subfolder path', () => {
    const nodeTree: Node = {
      path: '/',
      name: '/',
      type: 'directory',
      childrens: [
        {
          path: '/node_modules',
          name: 'node_modules',
          type: 'directory',
          childrens: [
            {
              path: '/src/components/index.js',
              name: 'index.js',
              type: 'file'
            }
          ]
        },
        {
          path: '/src',
          name: 'src',
          type: 'directory',
          childrens: [
            {
              path: '/src/components',
              name: 'components',
              type: 'directory',
              childrens: []
            }
          ]
        }
      ]
    }

    const nodeToAdd: Node = {
      path: '/src/components/.env',
      name: '.env',
      type: 'file'
    }

    addNode({
      nodeTree,
      nodeToAdd,
      path: '/src/components'
    })

    expect(nodeTree.childrens?.[1].childrens?.[0].childrens).toContain(
      nodeToAdd
    )
  })

  it('should not add a node at a invalid path', () => {
    const nodeTree: Node = {
      path: '/',
      name: '/',
      type: 'directory',
      childrens: []
    }

    const nodeToAdd: Node = {
      path: '/src',
      name: 'src',
      type: 'directory',
      childrens: []
    }

    addNode({
      nodeTree,
      nodeToAdd,
      path: '/invalid-path'
    })

    expect(nodeTree.childrens).toHaveLength(0)
  })
})
