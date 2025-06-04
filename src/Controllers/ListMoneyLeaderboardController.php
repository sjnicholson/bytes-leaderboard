<?php

namespace Ziven\BytesLeaderboard\Controllers;

use Flarum\Api\Serializer\UserSerializer;
use Flarum\User\User;
use Flarum\Api\Controller\AbstractListController;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use Flarum\Http\UrlGenerator;

class ListBytesLeaderboardController extends AbstractListController{
    public $serializer = UserSerializer::class;
    protected $url;

    public function __construct(UrlGenerator $url){
        $this->url = $url;
    }

    protected function data(ServerRequestInterface $request, Document $document){
        $params = $request->getQueryParams();
        $limit = $this->extractLimit($request);
        $offset = $this->extractOffset($request);
        $actor = $request->getAttribute('actor');
        $allowViewLeaderBoard = $request->getAttribute('actor')->can('bytesLeaderboard.allowViewLeaderbaord');

        if($allowViewLeaderBoard){
            $bytesLeaderboardResult = User::skip($offset)->take($limit + 1)->orderBy('bytes', 'desc')->get();
            $hasMoreResults = $limit > 0 && $bytesLeaderboardResult->count() > $limit;

            if($hasMoreResults){
                $bytesLeaderboardResult->pop();
            }

            $document->addPaginationLinks(
                $this->url->to('api')->route('bytesLeaderboard.get'),
                $params,
                $offset,
                $limit,
                $hasMoreResults?null:0
            );

            return $bytesLeaderboardResult;
        }
    }
}
