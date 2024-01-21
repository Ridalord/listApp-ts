export interface Item {
  id: string,
  item: string,
  checked: boolean
}

export default class ListItem implements Item{

  constructor(
    private _id: string = "",
    public _item: string = "",
    public _checked: boolean = false
  ) { }
  
  public get id():string {
    return this._id
  }
  public set id(id: string) {
    this._id = id
  }
  public get item(): string {
    return this._item
  }
  public set item(item:string) {
    this._item = item
  }
  public get checked(): boolean{
    return this._checked
  }
  public set checked(checked: boolean) {
    this._checked = checked
  }
}