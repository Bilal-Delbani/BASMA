<!DOCTYPE html>
<html>
<head>
    <title>Daily News Clicks Report</title>
</head>
<body>
    <h1>Daily News Clicks Report</h1>
    <table border="1" cellpadding="10">
        <thead>
            <tr>
                <th>Category</th>
                <th>Total Clicks</th>
                <th>Unique Clicks</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($clicksData as $item)
                <tr>
                    <td>{{ $item['info'] }}</td>
                    <td>{{ $item['total_clicks'] }}</td>
                    <td>{{ $item['unique_clicks'] }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>
</body>
</html>
