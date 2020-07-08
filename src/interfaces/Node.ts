export default interface Node {
  path: string
  name: string
  type: 'directory' | 'file'
  childrens?: Node[]
}
