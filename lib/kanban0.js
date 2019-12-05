class kanban0 {
    constructor(config) {
        //user-config
        this.ajax_mode_       = config.ajax_mode       || false;
        this.ajax_host_       = config.ajax_host       || 'http://127.0.0.1';
        this.itemDelButton_   = config.itemDelButton   || false;
        this.itemAddButton_   = config.itemAddButton   || false;
        this.kanbanDelButton_ = config.kanbanDelButton || false;
        this.KanbanAddButton_ = config.kanbanAddButton || false;
        this.itemDragNG_      = config.itemDragNG      || false;
        
        //create kanbans
        this.kanbans_     = document.getElementsByClassName('kanban');
        this.insert_      = [];

        let kanbans_len      = this.kanbans_.length;
        
        //kanbanにid割り当て
        for(let j=0; j<kanbans_len; j++){
            let kanban_elem        = this.kanbans_[j];
            const kanban_id        = kanban_elem.dataset.kanbanid;
            const kanban_id00      = ('00' + kanban_id).slice(-2);  //zero_padding;
            kanban_elem.id         = `kanban-${kanban_id00}`;
        }

        this.kanbans_ = document.getElementsByClassName('kanban');
        
        //具体的なのを作る
        for(let i=0; i<kanbans_len; i++){
            let header       = document.createElement('div');
            let main         = document.createElement('div');
            header.innerHTML = this.kanbans_[i].dataset.title;
            main.id          = `${this.kanbans_[i].id}-main`;
            header.id        = `${this.kanbans_[i].id}-title`;
            main.className   = 'kanban-droparea';
            header.className = 'kanban-title';

            //color
            header.style.backgroundColor = this.kanbans_[i].dataset.color;
            
            this.kanbans_[i].appendChild(header);
            this.kanbans_[i].appendChild(main);
        }
        
        for(let i=0; i<kanbans_len; i++){
            this.kanbans_[i].addEventListener('drop', function(event){
                event.dataTransfar.dropEffect = 'move';
            }, false);
        }
        
    }

    addKanban(title0, parent_id0, disabled_id0){
        var title       = title0       || 'kanban';
        var disabled_id = disabled_id0 || '';

        if(parent_id0==undefined || parent_id0==null){
            console.log("Error(kanban0.addKanban): parent_id is null or undefined. parent_id is needed. ");
            return -1;
        } 
        
        var parents = document.getElementsByClassName('kanban-area');
        this.kanbans_ = document.getElementsByClassName('kanban');
        for(let i=0; i<parents.length; i++){

            //全ての看板を取得して一番おおきいid+1する
            var kanban_ids=[];
            for(let j=0; j<this.kanbans_.length; j++) kanban_ids.push(Number(this.kanbans_[j].dataset.kanbanid));

            //kanbanがないとき
            const new_id   = Math.max.apply(null,kanban_ids);
            if(new_id==-Infinity) kanban_ids.push(-1);
            
            if(parents[i].dataset.kanbanarea==parent_id0){
                let new_kanban = document.createElement('div');
                const new_id   = Math.max.apply(null,kanban_ids) + 1;
                const new_id00 = ('00' + new_id).slice(-2);
                new_kanban.dataset.kanbanid = new_id
                new_kanban.dataset.disabled = disabled_id;
                new_kanban.dataset.title    = title0;
                new_kanban.className        = 'kanban';
                new_kanban.id               = `kanban-${new_id00}`

                let header_div       = document.createElement('div');
                let main_div         = document.createElement('div');
                header_div.innerHTML = title;
                main_div.id          = `kanban-${new_id00}-main`;
                header_div.id        = `kanban-${new_id00}-title`;
                main_div.className   = 'kanban-droparea';
                header_div.className = 'kanban-title';

                new_kanban.appendChild(header_div);
                new_kanban.appendChild(main_div);

                parents[i].appendChild(new_kanban);
            }
        }
    }

    removeKanban(elem_id, area_id){
        if(elem_id==undefined || elem_id==null){
            console.log("Error(kanban0.removeKanban): kanban_id is null or undefined. kanban_id is needed. ");
            return -1;
        } 
        
        var parents = document.getElementsByClassName('kanban-area');
        for(let i=0; i<parents.length; i++){
            if(parents[i].dataset.kanbanarea==area_id){
                const id00 = ('00' + elem_id).slice(-2);
                let remove_elem = document.getElementById(`kanban-${id00}`);
                if(remove_elem==undefined){
                    console.log(`Error(kanban0.removeKanban): kanban-${id00} is undefined.`);
                    return -1;
                }
                remove_elem.parentNode.removeChild(remove_elem);
            }
        }
    }
}
