import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MainMenu')
export class MainMenu extends Component {
    @property(Node)
    public contentLayout:Node |null= null
    @property(Prefab)
    public heroLayout:Prefab |null= null
    private heroNode:Node |null= null;

    protected onLoad(): void {
        
    }

    start() {

    }

    update(deltaTime: number) {
        
    }

    clickHero(){
        if(this.heroNode){
            this.heroNode.removeFromParent();
            this.heroNode.destroy();
            this.heroNode= null;
        }else{
            if(this.contentLayout&&this.heroLayout){
                this.heroNode = instantiate(this.heroLayout) as Node;
                this.contentLayout.addChild(this.heroNode );
            }
        }
    }
}

