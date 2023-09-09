import { _decorator, Button, Component, EventHandler, instantiate, Node, Sprite } from 'cc';
import { CSkillMgr } from '../logic/skill/CSkillMgr';
import { CKillEnty } from '../logic/entity/CKillEnty';
import { CResMgr } from '../logic/ResMgr';
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
            let killsData:Map<string,CKillEnty> = CSkillMgr.inst().getKillsData();
            for(let item of killsData.values()){
                console.log("KillTabUI killsData",killsData);
                console.log("KillTabUI",item);
                if(item){
                    let nodeItem = CResMgr.inst().createNode(item.prefab);
                    if(nodeItem){
                        let button= nodeItem.getComponent(Button) as Button;
                        let sprite = nodeItem.getComponent(Sprite) as Sprite;
                        if(!item.own){
                            sprite.grayscale = true;
                        }
                        let event:EventHandler= button.clickEvents[0];
                        let custom = item.uid;
                        event.customEventData=custom;
                        this.killListNode.addChild(nodeItem);
                    }
                }
            }
        }
    }

    onlcikItem(event:any,param:any){
        console.log("KillTabUI",param);
        

    }

   
}

