import { observable, computed } from 'mobx';

export default class MainStore {

    @observable datas = [];

    @computed get datasCount() {
        return this.datas.length;
    }

    addDaton = (daton) => {
        this.datas.push(daton);
    }
}