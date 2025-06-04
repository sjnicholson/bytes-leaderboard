<?php

namespace Ziven\BytesLeaderboard\Controllers;

use Flarum\Frontend\Document;
use Psr\Http\Message\ServerRequestInterface;

class BytesLeaderboardController{
    public function __invoke(Document $document, ServerRequestInterface $request){
        return $document;
    }
}
