import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'
import { PageHeader, Row, Panel, ListGroup, ListGroupItem, Button, Col, Image } from 'react-bootstrap'
import { profileActions } from './Profile.actions'
import { connect } from "react-redux"

/*
PROFILE
  username - text
  password - bcrypt
  email - email/FB
  picture - jpg/S3
  about - text
  location - text/FB

DEV DEETS
  join date  - date 
  started dev-ing date
  languages - text (recommend videos/articles)
  projects - git/links
  tutorials - links (created/completed)
  portfolio site - link
  soicalMedia - links/FB
  dreamJob - text
  currentJob - text/FB
  seekingJob - text
  recommended content - links

ACTIVITY
  tutorials completed - int
  tutorials written/views - int

EDIT
  all - PUT

*/ 
class Private extends Component {
  constructor(props) {

    super(props);
    
    this.state = {
      email: null
     };

  }

  componentDidMount() {
    
    this.props.fetchProfile()
    
  }
  
  render() {
    
    return (

      <div >
        <style type='text/css'>
          {`
          .profile {
            height: 100%;
            text-align: left;
          }
          .center{
            text-align: center;
          }
          .profilePicture{
            border: 5px solid white;
            border-radius: 200px;
            padding:0;
            margin:0
          }
          .smallProfilePicture{
            padding-top: 5em;
            display: inline-block;
          }
          .well {
            color: white;
            background-image: none;
            background-color: white;
            border: none;
            box-shadow: none;
          }
          .bottomOverlay{
            z-index: 0;
          }
          .topOverlay{
            margin-top: -140px;
            z-index: 1;

          }
          .overlay{
            position: realtive;

          }
          `}

        </style>
        {!sessionStorage.getItem('token') ?
          
          
          <Redirect to= "/"/>

          :
          
            <div className='profile'>
            {/* LOADING LOGIC BELOW?!? */}
              {/* {users.loading && <em>Loading users...</em>}
              {users.error && <span className="text-danger">ERROR: {users.error}</span>} */}
              <div className='overlay'>

                <div className='bottomOverlay'>
                  <Image src="https://baconmockup.com/1280/150/" responsive />
                </div>

                <div className='topOverlay container'>
                  <Row>


                    <Col className='center' smHidden xsHidden md={3}>
                      <div className='profilePicture'>

                        <Image src="https://picsum.photos/300/300" responsive circle />

                      </div>
                      <div style={{paddingTop: "1em"}}>
                        <h4 >{}</h4>
                        <h3 >{this.state.email}</h3>
                        <h5 >From: Florida</h5>
                        <h5 >Freelance Software Engineer</h5>
                        <h5 >Age: 31</h5>
                      </div>
                    </Col>
                    <Col sm={1}></Col>


                    <Col mdHidden lgHidden className='center' md={6}>
                      <div className='smallProfilePicture'>

                        <Image className='profilePicture' src="https://picsum.photos/300/300" responsive circle />

                      </div>

                      <div style={{marginTop: "2em"}}>

                        <h4 >{this.state.email}</h4>
                        <h5 >From: Florida</h5>
                        <h5 >Freelance Software Engineer</h5>
                        <h5 >Age: 31</h5>
                      </div>
                    </Col>


                    <Col xs={12} md={7}>


                      <Col smHidden xsHidden>
                        <PageHeader style={{paddingTop: "8em", paddingLeft: "2em"}}>
                            Profile
                        </PageHeader>
                      </Col>

                      <Col  mdHidden lgHidden>
                        <PageHeader style={{paddingLeft: "2em"}}>
                            Profile
                        </PageHeader>
                      </Col>


                      <div>
                        <Panel >
                          <Panel.Heading >

                            Your Information
                          </Panel.Heading>
                          <ListGroup>
                            <ListGroupItem>Name: Austin Johnston</ListGroupItem>
                            <ListGroupItem>Email: {this.state.email}</ListGroupItem>
                            <ListGroupItem>Birthday: April 28th, 1986</ListGroupItem>
                            <ListGroupItem>Name: Austin Johnston</ListGroupItem>
                            <ListGroupItem>Email: {this.state.email}</ListGroupItem>
                            <ListGroupItem>Birthday: April 28th, 1986</ListGroupItem>
                          </ListGroup>
                          <Panel.Body className='center'>
                            <Col xs={4} xsOffset={4}>
                              <Button block bsStyle="primary">
                                Edit
                              </Button>
                            </Col>

                          </Panel.Body>
                        </Panel>
                      </div>
                    </Col>

                  </Row>
                </div>
              </div>
          </div>

        }
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  const { profile } = state
  return {
    profile
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProfile: (credentials) => {
      dispatch(profileActions.fetchProfile(credentials))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Private)