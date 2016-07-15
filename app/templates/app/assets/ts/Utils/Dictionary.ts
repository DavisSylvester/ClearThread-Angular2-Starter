import { DictionaryItem } from './DictionaryItem';


export class Dictionary<T, R>{

    private _list: Array<DictionaryItem<T, R>>;
    public List: Array<DictionaryItem<T, R>>;
    private _keys: Array<T>;

    constructor() {
        this._keys = new Array<T>();
        this._list = new Array<DictionaryItem<T, R>>();

    }

    Add(t: T, r: R): void {

        let item = new DictionaryItem<T, R>(t, r);

        this.addItemToList(item);

    }

    Remove(t: T, r: R): void{
        let item = new DictionaryItem<T, R>(t, r);

        this.removeItemFromList(item);
    }

    private addItemToList(data: DictionaryItem<T, R>): void {

        try {
            if (!this.isKeyUsed(data.key)) {

                this._list.push(data);
                this.List = this._list;
            }
        }
        catch (e) {
            console.log(e);
        }

    }

    private isKeysEmpty(key: T): boolean {
        if (this._keys.length === 0) {
            return true;
        }
        return false;
    }

    private isKeyUsed(key: T): boolean {
        if (this.isKeysEmpty(key) ||
            this._keys.indexOf(key) === -1) {
            this._keys.push(key);
            return false;
        }

        console.log(`${key} is already used!`);
        throw `${key} is already used!`;


    }

    private removeItemFromList(item: DictionaryItem<T, R>): void {
        // Find Index of Item
        var index = this.findByItem(item);

        if (index === -1) {
            console.log(`${item.key} is not in the list`);
        }
        try {
            this._list.splice(index, 1);
            this.List = this._list;
        }
        catch (e) {
            console.error(`Error removing Item from List`);
        }
    }

    private findByItem(item: DictionaryItem<T, R>): number {
        let index = 0;

        this._list.forEach((x) => {

            if (x.key === item.key && x.value === item.value) {
                return index;
            }

            index++;
        });

        return -1;
    }


}