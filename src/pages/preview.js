/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const hairColors = [
  { name: "черный", value: "#000" },
  { name: "какой-то", value: "#49261a" },
  { name: "какой-то", value: "#684e3f" },
  { name: "какой-то", value: "#e8d98b" },
];

const faceColors = [
  { name: "светлый", value: "#ffe0cf" },
  { name: "светлый", value: "#e3c5a3" },
  { name: "светлый", value: "#e4bc99" },
  { name: "светлый", value: "#c9a587" },
];

export default function Preview() {
  const [hairColor, setHairColor] = useState("rgb(57, 60, 84)");
  const [eyeColor, setEyeColor] = useState("#1c67bd");
  const [lipsColor, setLipsColor] = useState("#bd0f57");
  const [faceColor, setFaceColor] = useState("rgb(255, 216, 201)");
  const [eyelidsColor, setEyelidsColor] = useState("rgb(81, 85, 112)");
  const [cheeksColor, setCheeksColor] = useState("rgb(226, 161, 161)");
  const [browsColor, setBrowsColor] = useState("rgb(81, 85, 112)");

  const [queryParams, setQueryParams] = useState();

  // const eyeColors = [];
  // const lipsColors = [];
  // const eyelidsColors = [];
  // const cheeksColors = [];
  // const browsColors = [];

  return (
    <Container>
      <Row className="my-3">
        <Col xs={12} md={6}>
          <Face
            eyeColor={eyeColor}
            faceColor={faceColor}
            lipsColor={lipsColor}
            eyelidsColor={eyelidsColor}
            cheeksColor={cheeksColor}
            hairColor={hairColor}
            browsColor={browsColor}
          />
        </Col>

        <Col xs={12} md={6}>
          <ColorPickerHair label="Цвет волос" color={hairColor} setColor={setHairColor} />
          <ColorPickerHair label="Цвет бровей" color={browsColor} setColor={setBrowsColor} />
          <ColorPickerEyelids label="Цвет век" color={eyelidsColor} setColor={setEyelidsColor} />
          <ColorPickerEyes label="Цвет глаз" color={eyeColor} setColor={setEyeColor} />
          <ColorPickerHead label="Цвет лица" color={faceColor} setColor={setFaceColor} />
          <ColorPickerCheeks label="Цвет щёк" color={cheeksColor} setColor={setCheeksColor} />
          <ColorPickerLips label="Цвет губ" color={lipsColor} setColor={setLipsColor} />
        </Col>
      </Row>
    </Container>
  );
}

function Face({
  eyeColor,
  faceColor,
  lipsColor,
  eyelidsColor,
  cheeksColor,
  hairColor,
  browsColor,
}) {
  return (
    <svg viewBox="71.945 -7.945 128 128">
      <BackGround />
      <Hair color={hairColor} />
      <Сlothes />
      <Head color={faceColor} />
      <Bangs color={hairColor} />
      <Lips color={lipsColor} />
      <Eyebrows color={browsColor} />
      <Cheeks color={cheeksColor} />
      <LidsLeft color={eyelidsColor} />
      <EyeLeft color={eyeColor} />
      <LidsRight color={eyelidsColor} />
      <EyeRight color={eyeColor} />
    </svg>
  );
}

function BackGround() {
  return <circle cx="135.945" cy="56.055" r="60" style={{ fill: "rgb(209 196 191 / 15%)" }} />;
}

function Hair({ color }) {
  return (
    <path
      fill={color}
      d="M 135.945 6.055 C 153.066 6.055 166.945 19.934 166.945 37.055 L 166.945 78.125 C 166.945 83.609 162.499 88.055 157.015 88.055 L 114.875 88.055 C 109.391 88.055 104.945 83.609 104.945 78.125 L 104.945 37.055 C 104.945 19.934 118.824 6.055 135.945 6.055 Z"
    />
  );
}

function Bangs({ color }) {
  return (
    <path
      fill={color}
      style={{ vectorEffect: "non-scaling-stroke", stroke: "rgb(0, 0, 0)" }}
      d="M 136.775 8.86 C 121.282 8.404 108.47 20.831 108.455 36.33 L 108.455 41.09 C 108.455 42.195 109.35 43.09 110.455 43.09 L 111.035 43.09 C 111.388 43.09 111.714 42.904 111.895 42.6 L 115.945 35.51 L 118.425 39.64 C 118.814 40.282 119.745 40.282 120.135 39.64 L 122.615 35.51 L 125.085 39.64 C 125.472 40.293 126.417 40.293 126.805 39.64 L 129.275 35.51 L 131.755 39.64 C 132.144 40.282 133.075 40.282 133.465 39.64 L 135.945 35.51 L 138.425 39.64 C 138.814 40.282 139.745 40.282 140.135 39.64 L 142.615 35.51 L 145.085 39.64 C 145.472 40.293 146.417 40.293 146.805 39.64 L 149.275 35.51 L 151.755 39.64 C 152.144 40.282 153.075 40.282 153.465 39.64 L 155.945 35.51 L 159.945 42.6 C 160.125 42.904 160.451 43.09 160.805 43.09 L 161.385 43.09 C 162.489 43.09 163.385 42.195 163.385 41.09 L 163.385 36.91 C 163.435 21.96 151.725 9.3 136.775 8.86 Z"
    />
  );
}

function Сlothes() {
  return (
    <g>
      <path
        style={{ fill: "#00adfe" }}
        className="cls-5"
        d="M 135.945 116.055 C 148.382 116.07 160.514 112.199 170.645 104.985 L 167.315 94.695 C 165.901 90.73 162.155 88.075 157.945 88.055 L 113.995 88.055 C 109.767 88.054 105.996 90.713 104.575 94.695 L 101.245 104.985 C 111.376 112.199 123.508 116.07 135.945 116.055 Z"
      />
      ;
      <path
        className="cls-6"
        style={{ fill: "#ff8475" }}
        d="M 118.485 113.505 C 129.867 116.971 142.023 116.971 153.405 113.505 L 150.945 88.055 L 120.945 88.055 L 118.485 113.505 Z"
      />
      ;
      <polygon
        style={{ fill: "#f23678" }}
        points="120.075 97.055 151.815 97.055 151.425 93.055 120.465 93.055 120.075 97.055"
      />
      <polygon
        style={{ fill: "#f23678" }}
        points="119.295 105.055 152.585 105.055 152.205 101.055 119.685 101.055 119.295 105.055"
      />
      <polygon
        style={{ fill: "#f23678" }}
        points="118.525 113.055 153.365 113.055 152.975 109.055 118.915 109.055 118.525 113.055"
      />
      <path
        style={{ fill: "rgb(247, 163, 130)" }}
        d="M 147.945 88.055 C 147.945 97.293 137.945 103.066 129.945 98.447 C 126.232 96.304 123.945 92.342 123.945 88.055 L 147.945 88.055 Z"
      />
      ;
    </g>
  );
}

function Head({ color }) {
  return (
    <g>
      <line
        stroke={color}
        style={{
          strokeWidth: "14px",
          strokeLinejoin: "round",
          fill: "none",
          strokeLinecap: "round",
        }}
        x1="135.945"
        x2="135.945"
        y1="75.055"
        y2="87.055"
      />
      <circle
        fill={color}
        style={{ stroke: "rgb(12, 12, 12)", vectorEffect: "non-scaling-stroke" }}
        className="cls-4"
        cx="110.945"
        cy="52.055"
        r="7"
      />
      <circle
        fill={color}
        style={{ stroke: "rgb(0, 0, 0)", vectorEffect: "non-scaling-stroke" }}
        className="cls-4"
        cx="160.945"
        cy="52.055"
        r="7"
      />
      <path
        className="cls-1"
        fill={color}
        style={{
          vectorEffect: "non-scaling-stroke",
          stroke: "rgb(0, 0, 0)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
        d="M 135.945 82.055 C 122.138 82.055 110.945 70.862 110.945 57.055 L 110.945 40.575 C 110.945 21.33 131.778 9.302 148.445 18.924 C 156.18 23.39 160.945 31.643 160.945 40.575 L 160.945 57.055 C 160.945 70.862 149.752 82.055 135.945 82.055"
      />
      ;
      <path
        fill={color}
        style={{
          vectorEffect: "non-scaling-stroke",
          stroke: "rgb(0, 0, 0)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
        d="M 134.88 57.671 L 133.49 62.692 L 134.646 63.252 L 136.054 63.167 L 137.575 63.308 L 138.544 62.74 L 137.059 57.581"
      />
      ;
    </g>
  );
}

function Eyebrows({ color }) {
  return (
    <g>
      <path
        stroke={color}
        style={{
          strokeWidth: "2px",
          opacity: "0.2",
          strokeLinejoin: "round",
          fill: "none",
          strokeLinecap: "round",
        }}
        d="M 144.055 43.515 L 149.735 43.115 C 151.416 42.995 153.03 43.799 153.945 45.215 L 154.715 46.425"
      />
      ;
      <path
        stroke={color}
        style={{
          strokeWidth: "2px",
          opacity: "0.2",
          strokeLinejoin: "round",
          fill: "none",
          strokeLinecap: "round",
        }}
        d="M 127.835 43.505 L 122.155 43.115 C 120.47 42.99 118.853 43.801 117.945 45.225 L 117.175 46.435"
      />
      ;
    </g>
  );
}

function Lips({ color }) {
  return (
    <g>
      <path
        fill={color}
        style={{ opacity: "0.7" }}
        d="M 130.465 71.445 C 130.465 70.605 141.465 70.605 141.465 71.445 C 141.465 73.235 139.015 74.695 135.985 74.695 C 132.955 74.695 130.465 73.235 130.465 71.445 Z"
      />
      <path
        fill={color}
        style={{ opacity: "0.7" }}
        d="M 141.425 71.345 C 141.425 72.125 130.425 72.125 130.425 71.345 C 130.465 69.555 132.945 68.055 135.945 68.055 C 138.945 68.055 141.425 69.555 141.425 71.345 Z"
      />
      <path
        fill={color}
        style={{ stroke: "#f85565", strokeMiterlimit: "10", strokeLinecap: "round" }}
        d="M 129.195 70.815 C 131.349 71.631 133.643 72.012 135.945 71.935 C 138.247 72.012 140.541 71.631 142.695 70.815"
      />
      ;
    </g>
  );
}
function Cheeks({ color }) {
  return (
    <g>
      <ellipse
        fill={color}
        style={{ stroke: "rgb(0, 0, 0)", strokeWidth: "0px" }}
        cx="151.938"
        cy="63.734"
        rx="4.145"
        ry="3.163"
      />
      ;
      <ellipse
        fill={color}
        style={{ stroke: "rgb(0, 0, 0)", strokeWidth: "0px" }}
        transform="matrix(1, 0, 0.009794, 1, -480.245594, -402.462477)"
        cx="597"
        cy="465.5"
        rx="4.145"
        ry="3.163"
      />
    </g>
  );
}

function LidsLeft({ color }) {
  return (
    <g>
      <path
        stroke={color}
        style={{
          strokeWidth: "2px",
          fill: "rgb(255, 255, 255)",
          strokeLinejoin: "round",
          strokeLinecap: "round",
        }}
        transform="matrix(1, 0, -0.009794, 1, 0.701411, 0.613673)"
        d="M 129.78 51.644 C 128.435 48.193 124.988 46.707 121.967 47.545 C 120.633 47.914 119.383 48.737 118.432 50.042 C 118.38 50.113 118.329 50.186 118.28 50.259"
      />
      <path
        stroke={color}
        style={{ fill: "rgb(255, 255, 255)", strokeLinejoin: "round", strokeLinecap: "round" }}
        transform="matrix(1, 0, -0.009794, 1, 0.701411, 0.613673)"
        d="M 129.201 51.483 C 126.617 53.925 124.216 53.304 123.089 53.274 C 122.607 53.261 119.775 52.515 118.89 50.884 C 118.839 50.792 119.006 50.336 118.96 50.244"
      />
    </g>
  );
}

function EyeLeft({ color }) {
  return (
    <g>
      <circle
        fill={color}
        cx="123.695"
        cy="50.805"
        r="3"
        transform="matrix(0.828896, 0, 0, 0.724151, 21.514938, 14.247154)"
      />
      <ellipse style={{ stroke: "rgb(0, 0, 0)" }} cx="124.005" cy="51.017" rx="0.884" ry="0.825" />
    </g>
  );
}

function LidsRight({ color }) {
  return (
    <g transform="matrix(0.980959, -0.120447, 0.103148, 0.913991, 21.358334, 19.782455)">
      <ellipse
        style={{ stroke: "rgb(0, 0, 0)" }}
        cx="148.145"
        cy="51.103"
        rx="0.819"
        ry="0.8"
        transform="matrix(1, 0, 0.009114, 1, -24.672893, -0.500028)"
      />
      <path
        stroke={color}
        style={{
          strokeWidth: "2px",
          fill: "rgb(255, 255, 255)",
          strokeLinejoin: "round",
          strokeLinecap: "round",
        }}
        d="M 129.78 51.644 C 128.435 48.193 124.988 46.707 121.967 47.545 C 120.633 47.914 119.383 48.737 118.432 50.042 C 118.38 50.113 118.191 50.65 118.142 50.723"
      />
      <path
        stroke={color}
        style={{ fill: "rgb(255, 255, 255)", strokeLinejoin: "round", strokeLinecap: "round" }}
        d="M 129.201 51.483 C 126.657 54.152 124.359 53.853 122.45 53.404 C 121.053 53.075 119.589 51.97 118.711 50.361 C 118.661 50.269 119.006 50.336 118.96 50.244"
      />
    </g>
  );
}

function EyeRight({ color }) {
  return (
    <g transform="matrix(0.980959, -0.120447, 0.103148, 0.913991, 21.358334, 19.782455)">
      <circle
        fill={color}
        cx="148.106"
        cy="58.832"
        r="3"
        transform="matrix(0.758947, 0, 0.007346, 0.786685, 11.094499, 4.301066)"
      />
      <ellipse
        style={{ stroke: "rgb(0, 0, 0)" }}
        transform="matrix(1, 0, 0.009114, 1, -24.672893, -0.500028)"
        cx="148.192"
        cy="51.153"
        rx="0.857"
        ry="0.692"
      />
    </g>
  );
}

function ColorPickerLips({ label, color, setColor }) {
  return (
    <div>
      <label>{label}</label>
      <div style={{ display: "flex" }}>
        <ColorInPicker
          color="#813153"
          active={color === "#813153"}
          onClick={() => setColor("#813153")}
        />

        <ColorInPicker
          color="#6a3e42"
          active={color === "#6a3e42"}
          onClick={() => setColor("#6a3e42")}
        />

        <ColorInPicker
          color="#ed8881"
          active={color === "#ed8881"}
          onClick={() => setColor("#ed8881")}
        />

        <ColorInPicker
          color="#c91657"
          active={color === "#c91657"}
          onClick={() => setColor("#c91657")}
        />
      </div>
    </div>
  );
}

function ColorPickerEyes({ label, color, setColor }) {
  return (
    <div>
      <label>{label}</label>
      <div style={{ display: "flex" }}>
        <ColorInPicker
          color="#331d03"
          active={color === "#331d03"}
          onClick={() => setColor("#331d03")}
        />
        <ColorInPicker
          color="#05785d"
          active={color === "#05785d"}
          onClick={() => setColor("#05785d")}
        />
        <ColorInPicker
          color="#667d78"
          active={color === "#667d78"}
          onClick={() => setColor("#667d78")}
        />
      </div>
    </div>
  );
}

function ColorPickerCheeks({ label, color, setColor }) {
  return (
    <div>
      <label>{label}</label>
      <div style={{ display: "flex" }}>
        <ColorInPicker
          color="#d47465"
          active={color === "#d47465"}
          onClick={() => setColor("#d47465")}
        />
        <ColorInPicker
          color="#d2939b"
          active={color === "#d2939b"}
          onClick={() => setColor("#d2939b")}
        />
        <ColorInPicker
          color="#9f5c5d"
          active={color === "#9f5c5d"}
          onClick={() => setColor("#9f5c5d")}
        />
      </div>
    </div>
  );
}

function ColorPickerEyelids({ label, color, setColor }) {
  return (
    <div>
      <label>{label}</label>
      <div style={{ display: "flex" }}>
        <ColorInPicker
          color="#12767e"
          active={color === "#12767e"}
          onClick={() => setColor("#12767e")}
        />
        <ColorInPicker
          color="#e9cecf"
          active={color === "#e9cecf"}
          onClick={() => setColor("#e9cecf")}
        />
        <ColorInPicker
          color="#88577a"
          active={color === "#88577a"}
          onClick={() => setColor("#88577a")}
        />
        <ColorInPicker
          color="#a8aebe"
          active={color === "#a8aebe"}
          onClick={() => setColor("#a8aebe")}
        />
        <ColorInPicker
          color="#3e4265"
          active={color === "#3e4265"}
          onClick={() => setColor("#3e4265")}
        />
      </div>
    </div>
  );
}

function ColorPickerHead({ label, color, setColor }) {
  return (
    <div>
      <label>{label}</label>
      <div style={{ display: "flex" }}>
        {faceColors.map((item) => (
          <ColorInPicker
            key={item.value}
            color={item.value}
            active={color === item.value}
            onClick={() => setColor(item.value)}
          />
        ))}
      </div>
    </div>
  );
}

function ColorPickerHair({ label, color, setColor }) {
  return (
    <div>
      <label>{label}</label>
      <div style={{ display: "flex" }}>
        {hairColors.map((item) => (
          <ColorInPicker
            key={item.value}
            color={item.value}
            active={color === item.value}
            onClick={() => setColor(item.value)}
          />
        ))}
      </div>
    </div>
  );
}

function ColorInPicker({ color, active, onClick }) {
  return (
    <div
      style={{
        backgroundColor: color,
        width: 25,
        height: 25,
        borderRadius: 25,
        borderWidth: 5,
        borderStyle: "solid",
        borderColor: active ? "black" : "white",
        margin: 10,
        cursor: "pointer",
      }}
      onClick={onClick}
    ></div>
  );
}
