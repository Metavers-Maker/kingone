
import { _decorator, Component, instantiate, Node, Prefab, resources } from "cc";

/**
 * res manager ,use load res / prefab
*/

export class CResMgr {

    public static m_inst: CResMgr | null = null;

    static inst() {
        if (this.m_inst === null) {
            this.m_inst = new CResMgr();
        }
        return this.m_inst;
    }

    public m_prefabs: Map<string, Prefab> = new Map();

    protected m_callback: Function | null = null;
    protected m_target: any = null;

    public init(_callback: Function, _target: any) {
        //
        this.m_callback = _callback;
        this.m_target = _target;
    }

    public loadRes() {
        this.loadHero();
        this.loadKills();
    }

    public loadHero() {
        //
        let res_dir = "prefab/hero";
        resources.loadDir(res_dir, (err, datas: Prefab[]) => {
            datas.forEach((item: Prefab) => {
                let name = res_dir + '/' + item.name;
                this.m_prefabs.set(name, item);
            });
            console.log("loadHero", this.m_prefabs);
            if (this.m_callback && this.m_target) {
                this.m_callback(this.m_target, 10);
            }
            this.loadEquip();
        });

    }

    public loadEquip() {
        if (this.m_callback && this.m_target) {
            this.m_callback(this.m_target, 20);
        }
        this.loadPet();
    }

    public loadPet() {
        if (this.m_callback && this.m_target) {
            this.m_callback(this.m_target, 30);
        }
        this.loadBoss();
    }

    public loadBoss() {
        //
        let res_dir = "prefab/boss";
        resources.loadDir(res_dir, (err, datas: Prefab[]) => {
            datas.forEach((item: Prefab) => {
                let name = res_dir + '/' + item.name;
                this.m_prefabs.set(name, item);
            });
            console.log("loadBoss", this.m_prefabs);
            if (this.m_callback && this.m_target) {
                this.m_callback(this.m_target, 40);
            }
            this.loadMonster();
        });
    }

    public loadMonster() {
        //
        let res_dir = "prefab/monster";
        resources.loadDir(res_dir, (err, datas: Prefab[]) => {
            datas.forEach((item: Prefab) => {
                let name = res_dir + '/' + item.name;
                this.m_prefabs.set(name, item);
            });
            console.log("loadMonster", this.m_prefabs);
            if (this.m_callback && this.m_target) {
                this.m_callback(this.m_target, 50);
            }
            this.loadLevel();
        });
    }

    public loadLevel() {
        if (this.m_callback && this.m_target) {
            this.m_callback(this.m_target, 80);
        }
        this.loadUI();
    }

    public loadUI() {
        if (this.m_callback && this.m_target) {
            this.m_callback(this.m_target, 90);
        }
        this.loadBullet();
    }

    public loadBullet() {
        //
        let res_dir = "prefab/bullet";
        resources.loadDir(res_dir, (err, datas: Prefab[]) => {
            console.log("loadBullet", datas);
            datas.forEach((item: Prefab) => {
                let name = res_dir + '/' + item.name;
                this.m_prefabs.set(name, item);
            });
            if (this.m_callback && this.m_target) {
                this.m_callback(this.m_target, 95);
            }
            this.loadEffect();
        });

    }

    public loadEffect() {
        //
        let res_dir = "prefab/effect";
        resources.loadDir(res_dir, (err, datas: Prefab[]) => {
            console.log("loadEffect", datas);
            datas.forEach((item: Prefab) => {
                let name = res_dir + '/' + item.name;
                this.m_prefabs.set(name, item);
            });
            if (this.m_callback && this.m_target) {
                this.m_callback(this.m_target, 100);
            }
        });
    }

    public loadKills() {
        //
        let res_dir = "prefab/skill";
        resources.loadDir(res_dir, (err, datas: Prefab[]) => {
            console.log("loadKills", datas);
            datas.forEach((item: Prefab) => {
                let name = res_dir + '/' + item.name;
                this.m_prefabs.set(name, item);
            });
            if (this.m_callback && this.m_target) {
                this.m_callback(this.m_target, 100);
            }
        });
    }

    public createNode(resurl: string): Node | null {
        let t_prefab = this.m_prefabs.get(resurl);
        if (t_prefab) {
            let ret = instantiate(t_prefab);
            return ret;
        }
        return null;
    }

}

