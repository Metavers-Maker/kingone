
import { _decorator, Component, director, JsonAsset, Node, ProgressBar, resources, ScrollView, UITransform, Vec3 } from 'cc';
import { TblServer } from '../logic/TblServer';
import { CResMgr } from '../logic/ResMgr';
import { CKingInst } from '../logic/CKingInst';
const { ccclass, property, type } = _decorator;

@ccclass('LoadDirector')
export class LoadDirector extends Component {

    public m_percent: number = 0;

    protected onLoad(): void {
        //
    }

    start() {
        // this.scroll.on(Node.EventType.SIZE_CHANGED, this.sizeChanged, this);
        resources.load("data/datatbl", (err, data: JsonAsset) => {
            console.log("LoadDirector load tbl", data);
            if (data) {
                TblServer.inst().init(data.json);
                //
                CResMgr.inst().init(this.loadCallback, this);
                CResMgr.inst().loadRes();
                //
            }
        })
    }

    loadCallback(target: any, percent: number) {
        target.m_percent = percent;
        if (percent >= 100) {
            //
            CKingInst.inst().init();
            //
            director.loadScene("home", (err, sc) => {
                //change scene
                console.log("LoadDirector load home sc", sc);
            });
        } else {
            //
        }
    }

    protected onDestroy(): void {
        //
    }


    update(deltaTime: number) {
        //
        let t_percent = this.m_percent / 100;
        let progressNode = this.node.getChildByName("ProgressBar");
        if (progressNode) {
            let bar = progressNode.getComponent("cc.ProgressBar") as ProgressBar;
            if (bar) {
                bar.progress = t_percent;
            }
        }
    }
}

