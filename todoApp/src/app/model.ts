export class model{
    user;
    items;
    constructor(){
        this.user="ferhat";
        this.items=[
            new todoItem("spor",true),
            new todoItem("yazılım",false),
            new todoItem("sinema",false),
            new todoItem("ders",false),
            new todoItem("okul",false),
            new todoItem("ferhat",false),
        ];
    }
}
export class todoItem{
    description;
    action;
    constructor(description: string, action: boolean){
        this.description=description;
        this.action=action;
    }
}