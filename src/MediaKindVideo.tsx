import { MKPlayer, MKPlayerConfiguration, MKStream } from '@mediakind/mkplayer/';
import React, { useEffect, useRef } from 'react';
const MediaKindVideo = (): JSX.Element => {
    const containerRef = useRef(null);
    useEffect(() => {
        // const mkplayer = (window as any).mkplayer;
        const mkPlayerConfiguration: MKPlayerConfiguration = {
            debug: true,
            autoplay: true,
            muted: true,
            smallScreen: false,
        };
        // const playerContainer = containerRef.current;
        const playerContainer = document.getElementById('testPlayer');

        // bail if we don't have DOM element
        if (!playerContainer) return;

        const mkPlayer: MKPlayer = new MKPlayer(
            playerContainer,
            mkPlayerConfiguration
        );

        const mkStream: MKStream = new MKStream(
            'https://mediusproduction.blob.core.windows.net/video-28731/Build2020Satya.mp4?sv=2018-03-28&sr=c&sig=KyUgEjjChf7RD5SzHisGTn3%2BXkof%2FHYSBMWSaj7EHCs%3D&se=2025-05-19T17%3A16%3A57Z&sp=r',
            'https://mediusproduction.blob.core.windows.net/video-28731/Build2020Satya.mp4?sv=2018-03-28&sr=c&sig=KyUgEjjChf7RD5SzHisGTn3%2BXkof%2FHYSBMWSaj7EHCs%3D&se=2025-05-19T17%3A16%3A57Z&sp=r',
            []
        );

        mkPlayer.load(mkStream).then(
            function () {
                console.log('MKPlayer Example Page Loaded Source Successfully');
            },
            function (reason) {
                console.error(
                    'MKPlayer Example Page - Error loading MKPlayer Source'
                );
                console.error(reason);
            }
        );
    }, [containerRef]);
    return <div id="testPlayer" ref={containerRef}></div>;
};

export default MediaKindVideo;
