"use client";

import { useEffect, useState, useRef } from "react";
import type { FC } from "react";

interface ColorfulPixelLogoProps {
  frameInterval: number; // 颜色变化间隔毫秒
  transitionDuration: number; // 颜色过渡时间毫秒
}

const ColorfulPixelLogo: FC<ColorfulPixelLogoProps> = ({
  frameInterval = 1000,
  transitionDuration = 1000,
}) => {
  const [pixelColors, setPixelColors] = useState(Array(64).fill(""));
  const lastUpdateTimeRef = useRef(0);
  const animationFrameRef = useRef(0);

  const colors = [
    "bg-red-400",
    "bg-yellow-400",
    "bg-green-400",
    "bg-blue-400",
    "bg-purple-400",
    "bg-pink-400",
  ];
  const edgePositions = [
    0, 7, 8, 15, 16, 23, 24, 31, 32, 39, 40, 47, 48, 55, 56, 63,
  ];

  // 生成随机颜色
  function generateRandomColor() {
    const newColors = Array(64).fill("bg-transparent");
    edgePositions.forEach((item) => {
      newColors[item] = colors[Math.floor(Math.random() * colors.length)];
    });
    return newColors;
  }

  useEffect(() => {
    // 初始化颜色
    setPixelColors(generateRandomColor());
    // 设置动画帧
    lastUpdateTimeRef.current = performance.now();

    // 动画循环函数
    const animateColors = (timestamp: number) => {
      // 计算上次更新以来的时间
      const elapsed = timestamp - lastUpdateTimeRef.current;

      // 如果时间间隔大于帧间隔，则更新颜色
      if (elapsed >= frameInterval) {
        // 更新颜色
        setPixelColors(generateRandomColor());
        // 更新时间戳
        lastUpdateTimeRef.current = timestamp;
      }

      // 请求下一帧动画 继续动画循环
      animationFrameRef.current = requestAnimationFrame(animateColors);
    };

    // 开始动画
    animationFrameRef.current = requestAnimationFrame(animateColors);

    // 组件卸载时取消动画
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [frameInterval]);

  return (
    <div className="w-24 h-24 grid grid-cols-8 gap-0.5 mb-4 transform rotate-45">
      {pixelColors.map((color, index) => {
        return (
          <div
            key={index}
            className={`w-full h-full ${color}`}
            style={{
              transition: `background-color ${transitionDuration}ms ease-in-out`,
            }}
          />
        );
      })}
    </div>
  );
};

export default ColorfulPixelLogo;
