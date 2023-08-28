import { _decorator, Button, Component, EventHandler, instantiate, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('KillTabUI')
export class KillTabUI extends Component {
    @property(Node)
    public killItemNode:Node|null=null;
    @property(Node)
    public killListNode:Node|null =null;
  
    start() {
      this.creatKill();
    }

    update(deltaTime: number) {
        
    }

    creatKill(){
      
        if(this.killListNode){
            for(let i=0;i<49;i++){
                let nodeItem = instantiate(this.killItemNode);
                if(nodeItem){
                    let button= nodeItem.getComponent(Button) as Button;
                    let event:EventHandler= button.clickEvents[0];
                    let custom = (i+2)+"";
                    event.customEventData=custom;
                    this.killListNode.addChild(nodeItem);
                }
            }

        }

    }

    onlcikItem(event:any,param:any){
        console.log("KillTabUI",param);
        

    }

   
}

