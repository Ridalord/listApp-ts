import FullList from "../model/FullList";

interface DOMList{
  ul: HTMLUListElement,
  clear(): void,
  render(fullList: FullList): void
}

export default class ListTemplate implements DOMList{
  static instance: ListTemplate = new ListTemplate
  public ul: HTMLUListElement;
  private constructor() {
    this.ul = document.getElementById("listItems") as HTMLUListElement
  }
  clear():void {
    this.ul.innerHTML=""
  }
  render(fullList: FullList): void {
    this.clear()
    fullList.list.forEach(element => {
      const listItem = document.createElement("li")
      listItem.classList.add("item")
      const input = document.createElement("input")
      input.type = "checkbox"
      input.setAttribute("id", element.id)
      input.checked = element.checked
      listItem.appendChild(input)
      input.addEventListener("change", () => {
        input.checked = !element.checked
        fullList.save()
      })
      const label = document.createElement("label")
      label.htmlFor = element.id
      label.textContent = element.item
      listItem.appendChild(label)
      const button = document.createElement("button")
      button.classList.add("button")
      button.textContent = "X";
      listItem.appendChild(button)
      button.addEventListener("click", (e) => {
        e.preventDefault()
        fullList.removeItem(element.id)
        this.render(fullList)
      })
      this.ul.appendChild(listItem)
    });
  }
}