const moment = require("moment") ;

 const groupBlocksByTime = (blocks) => {
    const groupedBlocks = {};
    const groupedTransaction = {};
    let sortedBlocks = blocks?.sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());

    let currentGroup = null;
    let groupCount = 0;

    for (const block of sortedBlocks) {
        const blockTime = new Date(block.time);
        const blockTimeString = blockTime.toISOString().slice(0, 16); // Group by hour and minute

        if (currentGroup === null || blockTimeString !== currentGroup) {
            if (groupCount === 6) {
                // If there are already 6 groups, stop grouping
                break;
            }

            currentGroup = blockTimeString;
            groupCount++;
            groupedBlocks[currentGroup] = block.tx_count;
            groupedTransaction[currentGroup] = 1;
        } else {
            groupedBlocks[currentGroup] += block.tx_count;
            groupedTransaction[currentGroup] += 1;

        }
    }

    let _labels = [] 
    Object.keys(groupedBlocks).map((key) => _labels.push(moment(key).format('hh:mm')))

    const data = {
        labels: [..._labels],
        datasets: [
            {
              label: 'Blocks data',
              data: [...Object.values(groupedBlocks)],
              fill: false,
              backgroundColor: 'transparent',
              borderColor: '#077a8f',
              tension: 0.4,
            },
          ]
    }

    _labels = [] 
    Object.keys(groupedTransaction).map((key) => _labels.push(moment(key).format('hh:mm')))

    const trans = {
        labels: [..._labels],
        datasets: [
            {
              label: 'Blocks data',
              data: [...Object.values(groupedTransaction)],
              fill: false,
              backgroundColor: 'transparent',
              borderColor: '#077a8f',
              tension: 0.4,
            },
          ]
    }

    return [data, trans];

}

const transactions = [
    {
        time: "2024-04-11T17:22:47Z",
        tx_count: 13,
    },
    {
        time: "2024-04-11T17:22:59Z",
        tx_count: 14,
    },
    {
        time: "2024-04-11T17:22:35Z",
        tx_count: 13,
    },
    {
        time: "2024-04-11T16:15:47Z",
        tx_count: 13,
    },
    {
        time: "2024-04-11T16:15:59Z",
        tx_count: 13,
    },
    {
        time:  
        "2024-04-11T16:16:11Z",
        tx_count: 13,
    },
    {
        time:  
        "2024-04-11T16:16:23Z",
        tx_count: 13,
    },
    {
        time:  
        "2024-04-11T16:16:35Z",
        tx_count: 13,
    },
    {
        time:  
        "2024-04-11T16:16:47Z",
        tx_count: 13,
    },
    {
        time: 
        "2024-04-11T16:16:59Z"
        ,
        tx_count: 13,
    },
    {
        time: 
        "2024-04-11T16:17:11Z",
        tx_count: 13,
    },
    {
        time: "2024-04-11T16:17:23Z",
        tx_count: 13,
    },
    {
        time: "2024-04-11T16:17:35Z",
        tx_count: 13,
    },
    {
        time: 
        "2024-04-11T16:17:47Z",
        tx_count: 13,
    },
    {
        time:  
        "2024-04-11T16:17:59Z",
        tx_count: 13,
    },
    {
        time: "2024-04-11T16:18:11Z",
        tx_count: 13,
    },
    {
        time: 
        "2024-04-11T16:18:23Z",
        tx_count: 13,
    },
    {
        time: "2024-04-11T16:18:35Z",
        tx_count: 13,
    },
    {
        time: "2024-04-11T16:18:47Z",
        tx_count: 13,
    },
    {
        time: "2024-04-11T16:18:35Z",
        tx_count: 13,
    },
    {
        time: "2024-04-11T16:18:30Z",
        tx_count: 13,
    },
    {
        time: "2024-04-11T16:18:26Z",
        tx_count: 13,
    },
    {
        time: "2024-04-11T16:18:23Z",
        tx_count: 13,
    },
    {
        time: "2024-04-11T16:18:18Z",
        tx_count: 13,
    },
    {
        time: "2024-04-11T16:18:13Z",
        tx_count: 13,
    },
    {
        time: "2024-04-11T16:18:09Z",
        tx_count: 13,
    },
    {
        time: "2024-04-11T16:18:03Z",
        tx_count: 13,
    },
    {
        time: "2024-04-11T16:17:59Z",
        tx_count: 13,
    },

    // Add more transactions here
];

console.log(groupBlocksByTime(transactions)[1].datasets)
