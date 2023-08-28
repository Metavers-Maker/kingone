import { _decorator, Component, Node, ScrollView, Label, Button, Vec3, UITransform, instantiate, error, Vec2 } from "cc";
import { CPlayer } from "../logic/entity/CPlayer";
import { HomeDirector } from "../home/HomeDirector";
const { ccclass, property, menu } = _decorator;

const _temp_vec3 = new Vec3();

@ccclass("ListViewCtrl")
@menu('UI/ListViewCtrl')
export class ListViewCtrl extends Component {
    @property(Node)
    public itemTemplate: Node = null!;
    @property(ScrollView)
    public scrollView: ScrollView = null!;
    @property
    public spawnCount = 0; // 初始化 item 数量
    @property
    public totalCount = 0; // 滚动列表里总的 item 数量
    @property
    public spacing = 0; // item 垂直排布间隔
    @property
    public bufferZone = 0; // when item is away from bufferZone, we relocate it
    @property(Button)
    public btnAddItem: Button = null!;
    @property(Button)
    public btnRemoveItem: Button = null!;
    @property(Button)
    public btnJumpToPosition: Button = null!;
    @property(Label)
    public lblJumpPosition: Label = null!;
    @property(Label)
    public lblTotalItems: Label = null!;
    onLoad() {

    }

    // 初始化 item
    initialize() {}

    update(dt: number) {}

    onclickItem(event:any,param:any){
        HomeDirector._self?.node.emit("ADD_ATTRIBUTE_LEVEL",param);
    }
}

