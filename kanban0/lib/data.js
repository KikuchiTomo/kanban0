export default class kanban0 {
    constructor(config) {
        this.thema_type_  = config.thema_type  || 0;
        this.ajax_mode_   = config.ajax_mode   || false;
        this.ajax_host_   = config.ajax_host   || "http://127.0.0.1";
        this.form_mode_   = config.form_mode   || false;
        this.form_action_ = config.form_action || "/"
        this.form_methot_ = config.form_methot || "get"
    }
}
