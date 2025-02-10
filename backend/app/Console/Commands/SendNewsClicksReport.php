<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Services\NewsClicksService;
use App\Mail\ClicksReportMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class SendNewsClicksReport extends Command
{
    protected $signature = 'news:send-clicks-report';
    protected $description = 'Send a daily email report with the number of clicks per news category.';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle(NewsClicksService $newsClicksService)
    {
        try {
            $clicksData = $newsClicksService->getNewsClicksData(); // Fetch click stats

            $adminEmail = config('mail.from.address'); // Fetch email from .env

            // Mail::to($adminEmail)->send(new ClicksReportMail($clicksData));
            Mail::send([], [], function($message) use ($clicksData, $adminEmail) {
                $message->to($adminEmail)  // Replace with actual email
                        ->subject('Total Clicks for News Categories')
                        ->html(view('emails.clicksReport', compact('clicksData'))->render());
            });

            Log::info('News Clicks Report sent successfully.');
        } catch (\Exception $e) {
            Log::error('Error sending News Clicks Report: ' . $e->getMessage());
        }
    }
}
