import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MainMenu')
export class MainMenu extends Component {
    @property(Node)
    public contentLayout:Node |null= null
    @property(Prefab)
    public heroLayout:Prefab |null= null

    protected onLoad(): void {
        
    }

    start() {

    }

    update(deltaTime: number) {
        
    }

    clickHero(){
        if(this.contentLayout&&this.heroLayout){
            let layout = instantiate(this.heroLayout) as Node;
            this.contentLayout.addChild(layout);
        }
    }
}

