// src/Carousel/Container.js
import React6, { useEffect as useEffect2, useMemo as useMemo3 } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // src/Carousel/props/propsInfo.js

var propsInfo_default = {
	slidesProp: {
		title: {
			en: "Number of slides",
			ru: "Количество слайдов"
		},
		control: "input",
		type: "number",
		category: "Slides",
		weight: 0.5
	},
	aspectRatio: {
		title: {
			en: "Aspect ratio",
			ru: "Соотношение сторон"
		},
		description: {
			en: "Fix aspect ratio to a specific value",
			ru: "Фиксировать соотношение сторон"
		},
		control: "select",
		variants: [{
			title: {
				en: "Auto",
				ru: "Авто"
			},
			value: "auto"
		}, "16:9", "4:3", "3:2", "1:1", "2:3", "3:4", "9:16"],
		category: "Slides",
		weight: 0.5
	},
	slidesWrapper: {
		title: {
			en: "Use as slides",
			ru: "Использовать в качестве слайдов"
		},
		control: "radio-group",
		variants: [{
			title: "Box",
			value: "box"
		}, {
			title: "Link",
			value: "link"
		}],
		category: "Slides",
		weight: 0.5
	},
	showArrows: {
		title: {
			en: "Show arrows",
			ru: "Показывать стрелки"
		},
		description: {
			en: "Show arrow for slider navigation",
			ru: "Отображать стрелки навигации по слайдам"
		},
		control: "checkbox",
		category: "Slider",
		weight: 0.5
	},
	showDots: {
		title: {
			en: "Show dots",
			ru: "Показывать точки"
		},
		description: {
			en: "Show dots for slider navigation",
			ru: "Отображать точки навигации по слайдам"
		},
		control: "checkbox",
		category: "Slider",
		weight: 0.5
	},
	durationProp: {
		title: {
			en: "Animation duration",
			ru: "Длительность анимации"
		},
		control: "input",
		variants: ["0s", "0.1s", "0.2s", "0.3s", "0.5s", "1s"],
		type: "text",
		category: "Slider",
		weight: 0.5
	},
	functionProp: {
		title: {
			en: "Animation timing function",
			ru: "Функция сглаживания анимации"
		},
		control: "input",
		variants: ["linear", "ease", "ease-in", "ease-out", "ease-in-out", "step-start", "step-end"],
		type: "text",
		category: "Slider",
		weight: 0.5
	},
	showHead: {
		title: {
			en: "Show title",
			ru: "Показывать заголовок"
		},
		description: {
			en: "Show component with slide title",
			ru: "Отображать компонент с заголовком слайда"
		},
		control: "checkbox",
		category: "Content",
		weight: 0.5
	},
	showText: {
		title: {
			en: "Show description",
			ru: "Показывать описание"
		},
		description: {
			en: "Show component with slide description",
			ru: "Отображать компонент с описанием слайда"
		},
		control: "checkbox",
		category: "Content",
		weight: 0.5
	},
	showLink: {
		title: {
			en: "Show button",
			ru: "Показывать кнопку"
		},
		description: {
			en: "Show component with the button link",
			ru: "Отображать компонент со ссылкой"
		},
		control: "checkbox",
		category: "Content",
		weight: 0.5
	},
	autoPlay: {
		title: {
			en: "Automatic slide transition",
			ru: "Автоматическое переключение слайдов"
		},
		control: "checkbox",
		category: "Autoplay",
		weight: 1
	},
	autoPlayBehavior: {
		title: {
			en: "Type of automatic slide transition",
			ru: "Тип автоматического переключения слайдов"
		},
		control: "radio-group",
		variants: [{
			title: {
				en: "Endless transition",
				ru: "Бесконечное переключение"
			},
			value: "infinite"
		}, {
			title: {
				en: "Until the last",
				ru: "Остановиться на последнем"
			},
			value: "range"
		}],
		category: "Autoplay",
		weight: 1
	},
	autoPlayIntervalProp: {
		title: {
			en: "Slide transition interval",
			ru: "Интервал переключения слайдов"
		},
		control: "input",
		type: "text",
		category: "Autoplay",
		weight: 1
	},
	autoPlayDelayProp: {
		title: {
			en: "Delay before slide transition starts",
			ru: "Задержка перед началом переключения слайдов"
		},
		control: "input",
		type: "text",
		category: "Autoplay",
		weight: 1
	},
	autoPlayPauseProp: {
		title: {
			en: "Pause between switches of slides when clicked",
			ru: "Пауза переключения слайдов при клике"
		},
		control: "input",
		type: "text",
		category: "Autoplay",
		weight: 1
	}
}; // src/Carousel/props/propsDefault.js

var propsDefault_default = {
	slidesProp: "4",
	aspectRatio: "16:9",
	slidesWrapper: "box",
	durationProp: "0.5s",
	functionProp: "linear",
	showArrows: true,
	showDots: true,
	showHead: true,
	showText: true,
	showLink: true,
	autoPlay: false,
	autoPlayBehavior: "infinite",
	autoPlayIntervalProp: "1s",
	autoPlayDelayProp: "0s",
	autoPlayPauseProp: "5s"
}; // src/Carousel/props/overrides.js

import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdLens } from "react-icons/md";
var overrides_default = {
	Slides: {
		kind: "Box",
		props: {
			position: "relative",
			display: "flex",
			overflow: "visible"
		}
	},
	Slide: {
		kind: "Box",
		props: {
			flex: "0 0 100%",
			"box-sizing": "border-box",
			position: "relative",
			display: "block",
			width: "100%",
			height: "100%"
		}
	},
	"Slide Image": {
		kind: "Image",
		props: {
			src: "https://uploads.quarkly.io/molecules/default-picture-1200.png",
			"object-fit": "cover",
			top: "0",
			left: "0",
			width: "100%",
			height: "100%",
			position: "absolute",
			display: "block",
			"z-index": "1"
		}
	},
	"Slide Content": {
		kind: "Box",
		props: {
			top: "50%",
			left: "50%",
			width: "auto",
			height: "auto",
			"max-width": "100%",
			"max-height": "100%",
			"text-align": "center",
			transform: "translate(-50%, -50%)",
			"box-sizing": "border-box",
			position: "absolute",
			display: "block",
			"z-index": "2"
		}
	},
	"Slide Head": {
		kind: "Text",
		props: {
			children: "Header",
			font: "--font-headline3",
			color: "--color-light"
		}
	},
	"Slide Text": {
		kind: "Text",
		props: {
			children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			font: "--font-base",
			color: "--color-light"
		}
	},
	"Slide Link": {
		kind: "Link",
		props: {
			children: "Link",
			margin: "8px 0 16px",
			padding: "8px 24px",
			font: "--font-base",
			"text-decoration": "none",
			color: "--color-light",
			background: "--color-primary",
			"border-radius": "2px",
			outline: "none",
			"box-sizing": "border-box",
			display: "inline-block",
			"user-select": "none",
			cursor: "pointer",
			"focus-box-shadow": "0 0 0 2px --color-primary"
		}
	},
	Arrows: {
		kind: "Box",
		props: {
			width: "100%",
			height: "0px",
			"min-height": "0px"
		}
	},
	Arrow: {
		kind: "Box",
		props: {
			top: "0",
			width: "33.33%",
			height: "100%",
			"align-items": "center",
			transition: "opacity .3s ease",
			position: "absolute",
			display: "flex",
			cursor: "pointer",
			"z-index": "5",
			opacity: "0.67",
			"hover-opacity": "1"
		}
	},
	"Arrow Prev": {
		props: {
			left: "0",
			"justify-content": "flex-start",
			background: `
				linear-gradient(
					to right,
					rgba(0,0,0,0.33) 0,
					rgba(0,0,0,0) 100%)
					rgba(0,0,0,0)
			`
		}
	},
	"Arrow Next": {
		props: {
			right: "0",
			"justify-content": "flex-end",
			background: `
				linear-gradient(
					to left,
					rgba(0,0,0,0.33) 0,
					rgba(0,0,0,0) 100%)
					rgba(0,0,0,0)
			`
		}
	},
	"Arrow Icon": {
		kind: "Icon",
		props: {
			category: "md",
			size: "52px",
			color: "--color-light",
			position: "relative"
		}
	},
	"Arrow Icon Prev": {
		props: {
			defaultIcon: MdKeyboardArrowLeft,
			left: "7.5%"
		}
	},
	"Arrow Icon Next": {
		props: {
			defaultIcon: MdKeyboardArrowRight,
			right: "7.5%"
		}
	},
	Points: {
		kind: "Box",
		props: {
			bottom: "0",
			left: "0",
			width: "100%",
			height: "48px",
			"align-items": "center",
			"justify-content": "center",
			position: "absolute",
			display: "flex",
			"z-index": "6"
		}
	},
	Point: {
		kind: "Box",
		props: {
			padding: "4px",
			"min-width": "0",
			"min-height": "0",
			transition: "opacity .3s ease",
			"align-items": "center",
			"justify-content": "center",
			display: "flex",
			cursor: "pointer",
			opacity: "0.67",
			"hover-opacity": "1",
			transform: "translateZ(0);"
		}
	},
	"Point Icon": {
		kind: "Icon",
		props: {
			category: "go",
			defaultIcon: MdLens,
			size: "10px",
			color: "--color-light",
			transition: "transform .3s ease",
			transform: "scale(1)"
		}
	},
	"Point :active": {
		props: {
			opacity: "1"
		}
	},
	"Point Icon :active": {
		props: {
			transform: "scale(1.5)",
			color: "--color-primary"
		}
	}
}; // src/Carousel/store/initial-state.js

var initial_state_default = {
	slidesNumb: 4,
	slidesList: [4, 1, 2, 3, 4, 1],
	animDuration: 500,
	animFunction: "linear",
	animTimeoutId: null,
	autoPlay: false,
	autoPlayBehavior: "infinite",
	autoPlayInterval: 1e3,
	autoPlayDelay: 5e3,
	autoPlayPause: 1e3,
	autoPlayIntervalId: null,
	autoPlayDelayId: null,
	autoPlayPauseId: null,
	active: 1,
	position: 100,
	animate: false,
	lock: false
}; // src/Carousel/store/rootActions.js

function clickNumb(state, {
	active
}) {
	if (state.lock) return state;
	return { ...state,
		active,
		position: 100 * active,
		animate: true,
		lock: false
	};
}

function setSlide(state, {
	active,
	position,
	animate,
	lock
}) {
	return { ...state,
		active,
		position,
		animate,
		lock
	};
}

function setData(state, {
	type,
	...props
}) {
	return { ...state,
		...props
	};
} // src/Carousel/store/rootReducer.js


function reducer(state, action) {
	switch (action.type) {
		case "CLICK_NUMB":
			return clickNumb(state, action);

		case "SET_SLIDE":
			return setSlide(state, action);

		case "SET_DATA":
			return setData(state, action);

		default:
			return state;
	}
} // src/utils/isEmptyChildren.js


import React from "react";

var isPlaceholder = child => child && child.props && child.props.text === "child placeholder";

var isOverride = child => child && child.props && typeof child.props.slot === "string" && child.props.slot.length > 0;

function isEmptyChildren(children) {
	const childrenArray = React.Children.toArray(children);
	return !childrenArray.some(child => child && !isPlaceholder(child) && !isOverride(child));
} // src/utils/parseTime.js


var regexMilliseconds = /^[0-9]{1,}(ms)?$/i;
var regexSeconds = /^(.?|[0-9]{1,}.?)[0-9]{1,}s$/i;

function parseTime(time, defaultTime) {
	if (regexMilliseconds.test(time)) {
		return parseInt(time, 10);
	}

	if (regexSeconds.test(time)) {
		return parseFloat(time, 10) * 1e3;
	}

	return parseFloat(defaultTime, 10) * 1e3;
} // src/Carousel/store/thunks.js


function init({
	slidesProp,
	durationProp,
	functionProp,
	autoPlay,
	autoPlayBehavior,
	autoPlayIntervalProp,
	autoPlayDelayProp,
	autoPlayPauseProp
}) {
	return function (dispatch) {
		const slidesNumb = parseInt(slidesProp, 10) > 0 ? parseInt(slidesProp, 10) : 1;
		const slidesList = [slidesNumb, ...Array.from({
			length: slidesNumb
		}, (_, i) => i + 1), 1];
		const animDuration = parseFloat(durationProp) > 0 ? parseFloat(durationProp) * 1e3 : 0;
		const animFunction = functionProp;
		const autoPlayInterval = parseTime(autoPlayIntervalProp, propsDefault_default.autoPlayIntervalProp);
		const autoPlayDelay = parseTime(autoPlayDelayProp, propsDefault_default.autoPlayDelayProp);
		const autoPlayPause = parseTime(autoPlayPauseProp, propsDefault_default.autoPlayPauseProp);
		dispatch({
			type: "SET_DATA",
			...initial_state_default,
			slidesNumb,
			slidesList,
			animDuration,
			animFunction,
			autoPlay,
			autoPlayBehavior,
			autoPlayInterval,
			autoPlayDelay,
			autoPlayPause
		});

		if (autoPlay) {
			dispatch(startAutoPlay());
		}
	};
}

var clickPrev = () => dispatch => {
	dispatch(pauseAutoPlay());
	dispatch(prevSlide());
};

var clickNext = () => dispatch => {
	dispatch(pauseAutoPlay());
	dispatch(nextSlide());
};

var pauseAutoPlay = () => (dispatch, getState) => {
	const {
		autoPlay,
		autoPlayPause,
		autoPlayPauseId,
		lock
	} = getState();
	if (!autoPlay || lock) return;
	clearTimeout(autoPlayPauseId);
	const autoPlayPauseIdTemp = setTimeout(() => {
		dispatch({
			type: "SET_DATA",
			autoPlayPauseId: null
		});
	}, autoPlayPause);
	dispatch({
		type: "SET_DATA",
		autoPlayPauseId: autoPlayPauseIdTemp
	});
};

var startAutoPlay = () => (dispatch, getState) => {
	const {
		autoPlayBehavior,
		autoPlayInterval,
		autoPlayDelay
	} = getState();
	const autoPlayDelayIdTemp = setTimeout(() => {
		const autoPlayIntervalIdTemp = setInterval(() => {
			const {
				slidesNumb,
				active,
				autoPlayPauseId
			} = getState();

			if (autoPlayPauseId) {
				return;
			}

			if (autoPlayBehavior === "range" && active >= slidesNumb) {
				dispatch(stopAutoPlay());
				return;
			}

			dispatch(nextSlide());
		}, autoPlayInterval);
		dispatch({
			type: "SET_DATA",
			autoPlayIntervalId: autoPlayIntervalIdTemp
		});
	}, autoPlayDelay);
	dispatch({
		type: "SET_DATA",
		autoPlayDelayId: autoPlayDelayIdTemp
	});
};

var stopAutoPlay = () => (dispatch, getState) => {
	const {
		autoPlayDelayId,
		autoPlayIntervalId,
		autoPlayPauseId
	} = getState();
	clearTimeout(autoPlayPauseId);
	clearTimeout(autoPlayDelayId);
	clearInterval(autoPlayIntervalId);
	dispatch({
		type: "SET_DATA",
		autoPlayIntervalId: null,
		autoPlayDelayId: null,
		autoPlayPauseId: null
	});
};

var prevSlide = () => (dispatch, getState) => {
	const {
		slidesNumb,
		animDuration,
		animTimeoutId,
		active,
		lock
	} = getState();
	if (lock) return;
	const newActive = active > 1 ? active - 1 : slidesNumb;

	if (newActive === slidesNumb) {
		dispatch({
			type: "SET_SLIDE",
			active: newActive,
			position: 0,
			animate: true,
			lock: true
		});
		clearTimeout(animTimeoutId);
		const tId = setTimeout(() => {
			dispatch({
				type: "SET_SLIDE",
				active: newActive,
				position: 100 * slidesNumb,
				animate: false,
				lock: false
			});
		}, animDuration);
		dispatch({
			type: "SET_DATA",
			animTimeoutId: tId
		});
	} else {
		dispatch({
			type: "SET_SLIDE",
			active: newActive,
			position: 100 * newActive,
			animate: true,
			lock: false
		});
	}
};

var nextSlide = () => (dispatch, getState) => {
	const {
		slidesNumb,
		animDuration,
		animTimeoutId,
		active,
		lock
	} = getState();
	if (lock) return;
	const newActive = active < slidesNumb ? active + 1 : 1;

	if (newActive === 1) {
		clearTimeout(animTimeoutId);
		dispatch({
			type: "SET_SLIDE",
			active: newActive,
			position: 100 * (slidesNumb + 1),
			animate: true,
			lock: true
		});
		const tId = setTimeout(() => {
			dispatch({
				type: "SET_SLIDE",
				active: newActive,
				position: 100,
				animate: false,
				lock: false
			});
		}, animDuration);
		dispatch({
			type: "SET_DATA",
			animTimeoutId: tId
		});
	} else {
		dispatch({
			type: "SET_SLIDE",
			active: newActive,
			position: 100 * newActive,
			animate: true,
			lock: false
		});
	}
};

function deinit() {
	return function (dispatch, getState) {
		const {
			animTimeoutId,
			autoPlayIntervalId,
			autoPlayDelayId,
			autoPlayPauseId
		} = getState();
		clearTimeout(animTimeoutId);
		clearInterval(autoPlayIntervalId);
		clearTimeout(autoPlayDelayId);
		clearTimeout(autoPlayPauseId);
		dispatch({
			type: "SET_DATA",
			...initial_state_default
		});
	};
} // src/Carousel/Component.js


import React5, { useCallback as useCallback3, useRef, useMemo as useMemo2 } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useOverrides } from "@quarkly/components";
import { Box as Box4 } from "@quarkly/widgets";
import styled from "styled-components"; // src/Carousel/components/Arrow.js

import React2 from "react";
import { Box, Icon } from "@quarkly/widgets";

var Arrow = ({
	type,
	clickFunc,
	override
}) => {
	return <Box {...override("Arrow", `Arrow ${type}`)} onClick={clickFunc}>
		<Icon {...override("Arrow Icon", `Arrow Icon ${type}`)} />
	</Box>;
};

var Arrow_default = Arrow; // src/Carousel/components/Point.js

import React3 from "react";
import { Box as Box2, Icon as Icon2 } from "@quarkly/widgets";

var Point = ({
	numb,
	active,
	clickFunc,
	override
}) => {
	const clickEvent = () => clickFunc(numb);

	return <Box2 {...override("Point", `Point ${numb}`, numb === active && "Point :active")} onClick={clickEvent}>
		<Icon2 {...override("Point Icon", `Point Icon ${numb}`, numb === active && "Point Icon :active")} />
	</Box2>;
};

var Point_default = Point; // src/Carousel/components/Slide.js

import React4, { useCallback, useMemo } from "react";
import { Box as Box3, Link, Placeholder, useConstructorMode } from "@quarkly/widgets";
var slidesWrapperList = {
	box: Box3,
	link: Link
};

var Slide = ({
	index,
	slides,
	slidesWrapper,
	numb,
	override,
	ChildPlaceholder
}) => {
	const SlideWrapper = useMemo(() => slidesWrapperList[slidesWrapper], [slidesWrapper]);
	const mode = useConstructorMode();
	const hideSlide = index === 0 || index === slides + 1;
	const clearOverride = useMemo(() => hideSlide && {
		"data-qoverride": void 0
	}, [hideSlide]);
	const getOverride = useCallback(name => ({ ...override(name, `${name} ${numb}`),
		...clearOverride
	}), [numb, clearOverride, override]);
	return <SlideWrapper {...getOverride("Slide")}>
		    
		{isEmptyChildren(override(`Slide ${numb}`).children) && <Placeholder message="Drop content here" width="100%" box-sizing="border-box" />}
		    
		{!(hideSlide && mode === "constructor") && <ChildPlaceholder slot={`Slide ${numb}`} />}
		  
	</SlideWrapper>;
};

var Slide_default = Slide; // src/Carousel/hooks/useKeyboard.js

import { useState, useEffect, useCallback as useCallback2 } from "react";

function useKeyboard(containerRef, {
	next,
	prev
}) {
	const [inFocus, setFocus] = useState(false);
	const onClick = useCallback2(event => {
		if (!containerRef || !containerRef.current) return;
		const {
			target
		} = event;

		if (containerRef.current.contains(target)) {
			setFocus(true);
		} else {
			setFocus(false);
		}
	}, [containerRef]);
	const onKeyDown = useCallback2(event => {
		if (!inFocus) return;
		const {
			key
		} = event;
		if (key === "ArrowRight") next();
		if (key === "ArrowLeft") prev();
	}, [inFocus, next, prev]);
	useEffect(() => {
		window.addEventListener("keydown", onKeyDown);
		window.addEventListener("click", onClick);
		return () => {
			window.removeEventListener("keydown", onKeyDown);
			window.removeEventListener("click", onKeyDown);
		};
	}, [onKeyDown, onClick]);
} // src/Carousel/Component.js


var AspectRatioBox = styled(Box4)`
    aspect-ratio: ${props => props.aspectRatio};
`;

var Component = ({
	aspectRatio: aspectRatioFromProps,
	slidesWrapper,
	showArrows,
	showDots,
	showHead,
	showText,
	showLink,
	...props
}) => {
	const {
		override,
		ChildPlaceholder,
		rest
	} = useOverrides(props, overrides_default);
	const sliderRef = useRef(null);
	const slidesRef = useRef(null);
	const {
		slidesNumb,
		slidesList,
		animDuration,
		animFunction,
		active,
		position,
		animate
	} = useSelector(state => state);
	const dispatch = useDispatch();
	const clickNumb2 = useCallback3(newActive => dispatch({
		type: "CLICK_NUMB",
		active: newActive
	}), [dispatch]);
	const onClickPrev = useCallback3(() => {
		dispatch(clickPrev());
	}, [dispatch]);
	const onClickNext = useCallback3(() => {
		dispatch(clickNext());
	}, [dispatch]);
	useKeyboard(sliderRef, onClickNext, onClickPrev);
	const aspectRatio = useMemo2(() => aspectRatioFromProps !== "auto" ? aspectRatioFromProps.replace(":", "/") : aspectRatioFromProps, [aspectRatioFromProps]);
	return <Box4
		ref={sliderRef}
		position="relative"
		align-self="normal"
		overflow="hidden"
		{...rest}
	>
		    
		<AspectRatioBox
			ref={slidesRef}
			{...override("Slides")}
			transform={`translateX(-${position}%)`}
			transition={animate ? `transform ${animDuration}ms ${animFunction}` : "none"}
			aspectRatio={aspectRatio}
		>
			{slidesList.map((numb, index) => <Slide_default
				key={`${rest["data-qid"]}-slide-${numb}-${index}`}
				index={index}
				slides={slidesNumb}
				slidesWrapper={slidesWrapper}
				numb={numb}
				showHead={showHead}
				showText={showText}
				showLink={showLink}
				override={override}
				ChildPlaceholder={ChildPlaceholder}
			/>)}
		</AspectRatioBox>
		    
		{showArrows && <Box4 {...override("Arrows")}>
			      
			<Arrow_default type="Prev" clickFunc={onClickPrev} override={override} />
			      
			<Arrow_default type="Next" clickFunc={onClickNext} override={override} />
			    
		</Box4>}
		    
		{showDots && <Box4 {...override("Points")}>
			{slidesList.slice(1, -1).map((numb, index) => <Point_default
				key={`point-${numb}-${index}`}
				numb={numb}
				active={active}
				clickFunc={clickNumb2}
				override={override}
			/>)}
		</Box4>}
		  
	</Box4>;
};

var Component_default = Component; // src/Carousel/Container.js

var Container = props => {
	const store = useMemo3(() => {
		return createStore(reducer, initial_state_default, applyMiddleware(thunk));
	}, []);
	const {
		slidesProp,
		durationProp,
		functionProp,
		autoPlay,
		autoPlayBehavior,
		autoPlayIntervalProp,
		autoPlayDelayProp,
		autoPlayPauseProp
	} = props;
	useEffect2(() => {
		store.dispatch(init({
			slidesProp,
			durationProp,
			functionProp,
			autoPlay,
			autoPlayBehavior,
			autoPlayIntervalProp,
			autoPlayDelayProp,
			autoPlayPauseProp
		}));
		return () => store.dispatch(deinit());
	}, [store, slidesProp, durationProp, functionProp, autoPlay, autoPlayBehavior, autoPlayIntervalProp, autoPlayDelayProp, autoPlayPauseProp]);
	return <Provider store={store}>
		<Component_default {...props} />
	</Provider>;
};

Object.assign(Container, {
	title: "Carousel",
	description: {
		en: "Slider with images that can be scrolled by pressing the arrows or dot buttons",
		ru: "Лента с изображениями, которую можно листать нажатием на стрелки или точки"
	},
	propInfo: propsInfo_default,
	defaultProps: propsDefault_default,
	overrides: overrides_default
});
var Container_default = Container;
export { Container_default as default };