'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/base/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/base/button';
import { cn } from '@/lib/utils';

// Mock data for clips with consistent durations
const clips = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: `Clip ${i + 1}: An Interesting Video Title That Might Be Long`,
  duration: `${(i % 5) + 1}:${((i * 13) % 60).toString().padStart(2, '0')}`,
}));

export default function ScrollableClips() {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = React.useState(false);
  const [showRightArrow, setShowRightArrow] = React.useState(true);
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth / 2;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  React.useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const renderClip = (clip: (typeof clips)[0]) => (
    <div
      key={clip.id}
      className={cn('flex-none w-[200px] sm:w-[300px]', {
        'w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-1 pb-3': isExpanded,
      })}
    >
      <Card className="border text-neutral-500 dark:text-neutral-400 border-dashed border-accent dark:border-accent-dark rounded-lg bg-neutral-200/50 dark:bg-neutral-800/50 border-neutral-300 dark:border-neutral-700">
        <CardContent className="flex aspect-video items-center justify-center p-2">
          <span className="font-medium text-xs">Video {clip.id}</span>
        </CardContent>
      </Card>
      <div className="flex justify-between mt-1">
        <h2 className="text-xs font-medium tracking-tight ml-1 line-clamp-1 text-neutral-700 dark:text-neutral-300">
          {clip.title}
        </h2>
        <p className="text-xs font-medium mr-1 text-neutral-500 dark:text-neutral-400">
          {clip.duration}
        </p>
      </div>
    </div>
  );

  const showViewAllButton = clips.length >= 5;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-xl sm:text-2xl font-semibold tracking-tighter text-neutral-900 dark:text-neutral-100">
          Recommended Videos
        </h1>
        {showViewAllButton && (
          <Button
            onClick={toggleExpand}
            variant="outline"
            size="sm"
            className="dark:border-neutral-700 dark:text-neutral-300"
          >
            {isExpanded ? 'Collapse' : 'View All'}
          </Button>
        )}
      </div>
      <div className={cn('relative', { 'px-5': isExpanded })}>
        {isExpanded ? (
          <div className="flex flex-wrap -mx-2">{clips.map(renderClip)}</div>
        ) : (
          <div
            ref={scrollContainerRef}
            className="overflow-x-scroll pb-4 scrollbar-hide snap-x snap-mandatory"
          >
            <div className="flex space-x-3 px-4">
              {clips.map((clip, index) => (
                <div
                  key={clip.id}
                  className={cn('snap-center', {
                    'pr-4': index === clips.length - 1,
                  })}
                >
                  {renderClip(clip)}
                </div>
              ))}
            </div>
          </div>
        )}
        {!isExpanded && showLeftArrow && (
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white dark:bg-neutral-800 border border-accent dark:border-accent-dark rounded-full h-8 w-8"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        )}
        {!isExpanded && showRightArrow && (
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white dark:bg-neutral-800 border border-accent dark:border-accent-dark rounded-full h-8 w-8"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}