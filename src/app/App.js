import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link
} from "react-router-dom";
import Web3 from"./getweb3";
//import Web3 from 'web3'
import './App.css';

import Signup from "../component/signup"
import Signin from "../component/signin"

import VC from "../component/vcard"
import Va from "../component/areavote"
import Fw from "../component/Fa1"
import Fa2 from "../component/Fa2"
import Fa3 from "../component/Fa3"
import Fa4 from "../component/Fa4"
 import Pannel from "../component/votenavbar"
 import Fa from "../component/finalarea"
import V from "../component/vote"
import Fp from "../component/forgetpas"

import firebase from "./firebase"
import Election from"../contracts/Election.json"
import Content from '../component/Content'
import TruffleContract from "@truffle/contract"
import ReactDOM from 'react-dom'
class App extends Component {

  state = { storageValue: 0, Weeb3: null, accounts: null, contract: null,  };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await Web3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = Election.networks[networkId];
      const instance = new web3.eth.Contract(
        Election.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };


 render(){

  return (

  <Router>



  <Route exact path="/signin" component={Signin}/>

  <Route exact path="/signup" component={Signup}/>

  <Route exact path="/areavote" component={Va}/>

  <Route exact path="/vote" component={V}/>

  <Route exact path="/finalarea" component={Fa}/>
  <Route exact path="/Fa2" component={Fa2}/>

  <Route exact path="/Fa1" component={Fw}/>
  <Route exact path="/Fa3" component={Fa3}/>
  <Route exact path="/Fa4" component={Fa4}/>
  <Route exact path="/V" component={V}/>
<Route exact path="/forgetpas" component={Fp}/>

    </Router>

  );

}
}

export default App;

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       account: '0x0',
//       candidates: [],
//       hasVoted: false,
//       loading: true,
//       voting: false,
//     }
// var web3 = new Web3();
//     if (typeof web3 != 'undefined') {
//       this.web3Provider = web3.currentProvider
//     } else {
//       this.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545')
//     }
//
//     this.web3 = new Web3(this.web3Provider)
//
//     this.election = TruffleContract(Election)
//     this.election.setProvider(this.web3Provider)
//
//     this.castVote = this.castVote.bind(this)
//     this.watchEvents = this.watchEvents.bind(this)
//   }
//   componentDidMount() {
//     // TODO: Refactor with promise chain
//     this.web3.eth.getCoinbase((err, account) => {
//       this.setState({ account })
//       this.election.deployed().then((electionInstance) => {
//         this.electionInstance = electionInstance
//         this.watchEvents()
//         this.electionInstance.candidatesCount().then((candidatesCount) => {
//           for (var i = 1; i <= candidatesCount; i++) {
//             this.electionInstance.candidates(i).then((candidate) => {
//               const candidates = [...this.state.candidates]
//               candidates.push({
//                 id: candidate[0],
//                 name: candidate[1],
//                 voteCount: candidate[2]
//               });
//               this.setState({ candidates: candidates })
//             });
//           }
//         })
//         this.electionInstance.voters(this.state.account).then((hasVoted) => {
//           this.setState({ hasVoted, loading: false })
//         })
//       })
//     })
//   }
//
//   watchEvents() {
//     // TODO: trigger event when vote is counted, not when component renders
//     this.electionInstance.votedEvent({}, {
//       fromBlock: 0,
//       toBlock: 'latest'
//     }).watch((error, event) => {
//       this.setState({ voting: false })
//     })
//   }
//
//   castVote(candidateId) {
//     this.setState({ voting: true })
//     this.electionInstance.vote(candidateId, { from: this.state.account }).then((result) =>
//       this.setState({ hasVoted: true })
//     )
//   }
//
//   render() {
//     return (
//       <div class='row'>
//         <div class='col-lg-12 text-center' >
//           <h1>Election Results</h1>
//           <br/>
//           { this.state.loading || this.state.voting
//             ? <p class='text-center'>Loading...</p>
//             : <Content
//                 account={this.state.account}
//                 candidates={this.state.candidates}
//                 hasVoted={this.state.hasVoted}
//                 castVote={this.castVote} />
//           }
//         </div>
//       </div>
//     )
//   }
// }
//
// ReactDOM.render(
//    <App />,
//    document.querySelector('#root')
// )
// export default App;
