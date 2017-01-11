import EditEventBase from "./EditEventBase";
import moment from "moment";
import _ from "lodash";

class EditEvent extends EditEventBase {
    constructor(props) {
        super(props);
        this.state = this.props.event;
        this.state.start = moment(this.state.start).format("DD/MM/YYYY HH:mm");
        this.state.registrationStart = moment(this.state.registrationStart).format("DD/MM/YYYY HH:mm");
        this.state.registrationEnd = moment(this.state.registrationEnd).format("DD/MM/YYYY HH:mm");
    }

    handleSubmit(event) {
        event.preventDefault();
        let modified = _.cloneDeep(this.state);
        modified.start = moment(this.state.start, "DD/MM/YYYY HH:mm").toDate();
        modified.registrationStart = moment(this.state.registrationStart, "DD/MM/YYYY HH:mm").toDate();
        modified.registrationEnd = moment(this.state.registrationEnd, "DD/MM/YYYY HH:mm").toDate();
        modified.creator = this.state.creator.id;
        this.props.saveEvent(modified);
    }
}

export default EditEvent;
