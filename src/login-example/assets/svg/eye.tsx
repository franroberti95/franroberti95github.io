const Eye = ({eyeCoords}:{eyeCoords?:{x:number,y:number}}) =>
    <g id="eye">
        <path fill="#f8f3dc" d="M74.18 72.55c-2.33 8.29-.5 20.75 3.58 27.15s10.57 9.52 18.14 10.77c9.89 1.64 20.75.57 27.51-7.42 7.06-8.35 7.67-18.75 4.46-29.54-3.4-11.4-8.69-18.23-21.65-20.5-9.62-1.69-28.11 1.07-32.04 19.54z"/>
        <path fill="#141827" d="M72.73 72.15c-1.82 6.67-1.3 14.12.54 20.73S78.8 105 84.76 108.31s13.43 4.55 20.24 4.29c7-.27 14-2.54 18.83-7.77a28.78 28.78 0 007.39-20.52 45.33 45.33 0 00-5.4-19.9 24 24 0 00-11.95-10.8A33.81 33.81 0 0099 51.15c-10.73.67-20.71 6.15-24.85 16.43a29 29 0 00-1.38 4.57c-.41 1.89 2.48 2.69 2.89.8a22.89 22.89 0 017.89-13.28 26.65 26.65 0 0112.3-5.17c8.86-1.47 19.4.74 25.19 8 3.46 4.37 5.32 10.11 6.42 15.49 1.38 6.7 1 13.84-2.34 19.91a21.93 21.93 0 01-15.41 11.12 38.48 38.48 0 01-19-1.41A21.33 21.33 0 0177.48 96a39 39 0 01-2.66-18.7 26.85 26.85 0 01.8-4.35 1.5 1.5 0 00-2.89-.8z"/>
        <path fill="#eae3ca" className="toni-eye" d="M78.77 99.59s4.42 8.16 17.13 10.33c7.11 1.21 18.86 1.21 27-7.43 4.73-5 8.22-15.66 4.29-28.69 0 0 2.16 48.4-48.42 25.79z"/>
        <ellipse cx={eyeCoords?.x} cy={eyeCoords?.y} fill="#141827" rx="3.41" ry="3.7"/>
        <path fill="#141827" d="M72.73 72.15c-1.82 6.67-1.3 14.12.54 20.73S78.8 105 84.76 108.31s13.43 4.55 20.24 4.29c7-.27 14-2.54 18.83-7.77a28.78 28.78 0 007.39-20.52 45.33 45.33 0 00-5.4-19.9 24 24 0 00-11.95-10.8A33.81 33.81 0 0099 51.15c-10.73.67-20.71 6.15-24.85 16.43a29 29 0 00-1.38 4.57c-.41 1.89 2.48 2.69 2.89.8a22.89 22.89 0 017.89-13.28 26.65 26.65 0 0112.3-5.17c8.86-1.47 19.4.74 25.19 8 3.46 4.37 5.32 10.11 6.42 15.49 1.38 6.7 1 13.84-2.34 19.91a21.93 21.93 0 01-15.41 11.12 38.48 38.48 0 01-19-1.41A21.33 21.33 0 0177.48 96a39 39 0 01-2.66-18.7 26.85 26.85 0 01.8-4.35 1.5 1.5 0 00-2.89-.8z"/>
    </g>;

export default Eye
