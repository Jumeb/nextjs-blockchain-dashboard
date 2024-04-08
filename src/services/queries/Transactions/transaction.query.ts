// query MyQuery {
//     EVM(network: eth) {
//       Transactions(limit: {}) {
//         Transaction {
//           To
//           From
//           Cost
//           Value
//           Type
//           ToCode {
//             Hash
//           }
//         }
//         Fee {
//           SenderFee
//         }
//         Block {
//           Time
//         }
//       }
//     }
//   }