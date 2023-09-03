import { _decorator, Button, Component, EventHandler, instantiate, Node } from 'cc';
import { CSkillMgr } from '../logic/skill/CSkillMgr';
import { CKill } from '../logic/entity/CKill';
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
            this.killListNode.removeAllChildren();
            let killsData:Map<number,CKill> = CSkillMgr.inst().getKillsData();
            for(let number of killsData.keys()){
                let nodeItem = instantiate(this.killItemNode);
                if(nodeItem){
                    let button= nodeItem.getComponent(Button) as Button;
                    let event:EventHandler= button.clickEvents[0];
                    let custom = number+"";
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

