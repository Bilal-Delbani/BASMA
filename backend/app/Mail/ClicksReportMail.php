<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ClicksReportMail extends Mailable
{
    use Queueable, SerializesModels;

    public $clicksData;

    public function __construct($clicksData)
    {
        $this->clicksData = $clicksData;
    }

    public function build()
    {
        return $this->from(env('MAIL_FROM_ADDRESS'))
            ->subject('Daily News Clicks Report')
            ->view('emails.clicksReport');
    }
}
