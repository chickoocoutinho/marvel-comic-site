import { memo, useRef } from "react";

import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";
import { FixedSizeList as List } from "react-window";

import {
	InfinityCarouselLeftArrow,
	InfinityCarouselRightArrow,
} from "./InfinityCarouselArrows";

import styles from "./infinityCarousel.module.css";

const SCROLL_BUTTON_OFFSET = 100;

const InfiniteCarousel = ({
	hasNextPage,
	isNextPageLoading,
	items,
	loadNextPage,
	height,
	itemSize,
	renderLoading,
	renderComponent,
	loadingBuffer = 10,
}) => {
	const listRef = useRef();

	const itemCount = hasNextPage ? items.length + loadingBuffer : items.length; // 10 extra for Skeletal Loading

	const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;

	const isItemLoaded = (index) => !hasNextPage || index < items.length;

	const Item = ({ index, style }) => {
		if (!isItemLoaded(index)) {
			return <div style={style}>{renderLoading()}</div>;
		} else {
			return <div style={style}>{renderComponent(index)}</div>;
		}
	};

	const handleScrollNext = () => {
		listRef.current.scrollLeft += SCROLL_BUTTON_OFFSET;
	};

	const handleScrollPrev = () => {
		listRef.current.scrollLeft -= SCROLL_BUTTON_OFFSET;
	};

	return (
		<div className={styles.root}>
			<InfinityCarouselLeftArrow onClick={handleScrollPrev} />
			<AutoSizer disableHeight>
				{({ width }) => (
					<InfiniteLoader
						isItemLoaded={isItemLoaded}
						itemCount={itemCount}
						loadMoreItems={loadMoreItems}
					>
						{({ onItemsRendered, ref }) => (
							<List
								className={styles.noScrollbars}
								height={height}
								itemCount={itemCount}
								itemSize={itemSize}
								onItemsRendered={onItemsRendered}
								ref={ref}
								width={width}
								layout="horizontal"
								outerRef={listRef}
							>
								{Item}
							</List>
						)}
					</InfiniteLoader>
				)}
			</AutoSizer>
			<InfinityCarouselRightArrow onClick={handleScrollNext} />
		</div>
	);
};

export default memo(InfiniteCarousel);
