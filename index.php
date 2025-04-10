<?php
$transactions = [
    ["amount" => 100, "type" => "in", "date" => "2025-04-01"],
    ["amount" => 50, "type" => "out", "date" => "2025-04-02"],
    ["amount" => 200, "type" => "in", "date" => "2025-04-03"],
    ["amount" => 30, "type" => "out", "date" => "2025-04-04"],
    ["amount" => 150, "type" => "out", "date" => "2025-04-05"],
];

function isOutgoing($transaction) {
    return $transaction['type'] === 'out';
}

function calculateTotal($transactions, $filter) {
    $filteredTransactions = array_filter($transactions, $filter); 
    $total = 0;
    
    
    foreach ($filteredTransactions as $transaction) {
        $total += $transaction['amount'];
    }

    return $total;
}

$totalOutgoing = calculateTotal($transactions, 'isOutgoing');

?>
<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Транзакції</title>
    <style>
        table {
            width: 50%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        table, th, td {
            border: 1px solid black;
        }
        th, td {
            padding: 8px;
            text-align: left;
        }
    </style>
</head>
<body>

    <h2>Загальна сума витрат за вихідними транзакціями</h2>

    <table>
        <tr>
            <th>Сума</th>
            <th>Тип</th>
            <th>Дата</th>
        </tr>
        <?php foreach ($transactions as $transaction): ?>
            <?php if ($transaction['type'] === 'out'): ?>
                <tr>
                    <td><?php echo $transaction['amount']; ?></td>
                    <td><?php echo $transaction['type']; ?></td>
                    <td><?php echo $transaction['date']; ?></td>
                </tr>
            <?php endif; ?>
        <?php endforeach; ?>
    </table>

    <h3>Загальна сума витрат: <?php echo $totalOutgoing; ?> грн</h3>

</body>
</html>