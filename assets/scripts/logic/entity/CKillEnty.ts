/**
 * kill base 
*/

export class CKillEnty {
    public uid: string = "";
    public name: string = "";
    public prefab: string = "";
    public dsp: string = "";
    public own: boolean = false;

    parse(json: any) {
        this.uid = json.id;
        this.name = json.name;
        this.prefab = json.prefab;
        this.dsp = json.dsp;
        this.own = json.own === "1" ? true : false;
    }
}
