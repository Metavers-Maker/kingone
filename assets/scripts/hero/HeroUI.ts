import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('HeroUI')
export class HeroUI extends Component {
    @property(Node)
    public heroUi:Node|null =null;
    @property(Node)
    public killUi:Node |null = null 
    start() {

    }

    update(deltaTime: number) {
        
    }

    onClickTab(event:any,param:any){
        console.log("HeroUI onClickTab = ",param);
        
        if(this.heroUi){
            this.heroUi.active = false;
        }
        if(this.killUi){
            this.killUi.active = false;
        }

        if(param ==1){
            if(this.heroUi){
                this.heroUi.active = true;
            }
        }else if(param ==2){
            if(this.killUi){
                this.killUi.active = true;
            }
        }
    }
}

