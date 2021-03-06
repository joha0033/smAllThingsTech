import { connect } from "react-redux"
import SigninModal from "../Modal.components/SigninModal.component"
import SigininForm from "../../Credentials/Signin/Signin"
import { modalActions } from "../Modal.actions"





const Signin = SigninModal(SigininForm)


const mapStateToProps = (state) => {
    const { credentials, modal } = state
    return {
        credentials,
        modal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideSigninModal: () => {
            dispatch(modalActions.hideSigninModal())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Signin)