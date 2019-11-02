export default class kanban0 {
    constructor(config) {
        //user-config
        this.thema_type_  = config.thema_type  || 0;
        this.ajax_mode_   = config.ajax_mode   || false;
        this.ajax_host_   = config.ajax_host   || 'http://127.0.0.1';
        this.form_mode_   = config.form_mode   || false;
        this.form_action_ = config.form_action || '/';
        this.form_methot_ = config.form_methot || 'get';

        //create kanbans
        this.kanbans_     = document.getElementByClassName('kanban');
        this.insert_      = []

        let kanbans_len      = this.kanbans_.length;
        
        //kanbanにid割り当て
        for(let j=0; j<kanbans_len; j++){
            let kanban_elem        = kanbans[j]
            const kanban_id        = kanban_elem.dataset.kanbanid;
            const kanban_id00      = ('00' + kanban_id).slice(-2);  //zero_padding
            kanban_elem.id         = `kanban-${kanban_id00}`;
        }

        this.kanbans_     = document.getElementByClassName('kanban');
        //具体的なのを作る
        for(let i=0; i<kanbans_len; i++){
            let header_div       = document.createElement('div');
            header_div.innerHTML = kanbans_[i].dataset.title;
            header_div.id        = `${kanbans_[i].id}-title`
            header_div.className = 'kanban-title'
            this.kanbans_[i].appendChild(header_div);
        }
        
        for(let i=0; i<kanbans_len; i++){
            this.kanbans_[i].addEventListener('drop', function(event){
                event.dataTransfar.dropEffect = 'move';
            }, false);

            this.kanbans_[i].addEventListener('dragover', function(event){
                event.target.appendChild
            }, false);
        }
        
    }

    this.setKanbanBakCol(kanban_id, color, constant){
        
    }
}
