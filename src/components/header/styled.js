import styled from "styled-components";

export const Styled = {
    Wrapper: styled.header`
        position: fixed;
        top: 0;
        z-index: 1000;
        width: 100%;
        background: rgba(8, 12, 10, 0.82);
        border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        backdrop-filter: blur(20px);
        transition:
            background 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;

        &.scrolled {
            background: rgba(6, 9, 7, 0.96);
            border-color: rgba(118, 255, 157, 0.1);
            box-shadow: 0 14px 40px rgba(0, 0, 0, 0.2);
        }

        .headerInner {
            width: min(1440px, calc(100% - 48px));
            min-height: 88px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: auto 1fr auto;
            align-items: center;
            gap: 40px;
        }

        .brand {
            padding: 0;
            display: inline-flex;
            align-items: center;
            gap: 12px;
            border: 0;
            background: transparent;
            color: #f6f8f6;
            cursor: pointer;
            text-align: left;
        }

        .brandIcon {
            width: 42px;
            height: 42px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(118, 255, 157, 0.3);
            border-radius: 50%;
            background: rgba(118, 255, 157, 0.07);
            color: #76ff9d;
            transition: background 0.2s ease, box-shadow 0.2s ease;
        }

        .brand:hover .brandIcon,
        .brand.active .brandIcon {
            background: rgba(118, 255, 157, 0.12);
            box-shadow: 0 0 20px rgba(118, 255, 157, 0.12);
        }

        .brandIcon svg {
            width: 18px;
            height: 18px;
        }

        .brandText {
            display: flex;
            flex-direction: column;
            font-family: "Antonio", sans-serif;
            line-height: 0.92;
            text-transform: uppercase;
        }

        .brandText strong {
            font-size: 1.15rem;
            font-weight: 700;
            letter-spacing: 0.03em;
        }

        .brandText span {
            margin-top: 5px;
            color: #76ff9d;
            font-size: 0.67rem;
            font-weight: 600;
            letter-spacing: 0.2em;
        }

        .desktopNav {
            height: 88px;
            display: flex;
            align-items: stretch;
            justify-content: center;
        }

        .desktopNav button {
            position: relative;
            min-width: 112px;
            padding: 0 18px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 4px;
            border: 0;
            background: transparent;
            color: #7e8a82;
            cursor: pointer;
            transition:
                color 0.2s ease,
                background 0.2s ease;
        }

        .desktopNav button::after {
            content: "";
            position: absolute;
            right: 18px;
            bottom: 0;
            left: 18px;
            height: 2px;
            background: #76ff9d;
            transform: scaleX(0);
            transform-origin: center;
            transition: transform 0.2s ease;
        }

        .desktopNav button:hover,
        .desktopNav button.active {
            background: rgba(255, 255, 255, 0.025);
            color: #f6f8f6;
        }

        .desktopNav button.active::after,
        .desktopNav button:hover::after {
            transform: scaleX(1);
        }

        .desktopNav button.active > span {
            color: #76ff9d;
        }

        .desktopNav button > span {
            font-family: "Antonio", sans-serif;
            font-size: 0.74rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.09em;
            transition: color 0.2s ease;
        }

        .desktopNav small {
            color: #536058;
            font-family: "Antonio", sans-serif;
            font-size: 0.42rem;
            font-weight: 600;
            letter-spacing: 0.1em;
        }

        .headerActions {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .githubLink {
            min-height: 44px;
            padding: 0 16px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid rgba(255, 255, 255, 0.11);
            border-radius: 999px;
            color: #f6f8f6;
            font-family: "Antonio", sans-serif;
            font-size: 0.68rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            transition: background 0.2s ease, border-color 0.2s ease;        }

        .githubLink:hover {
            border-color: rgba(118, 255, 157, 0.38);
            background: rgba(118, 255, 157, 0.07);
        }

        .githubLink svg:last-child {
            color: #76ff9d;
        }

        .menuButton {
            width: 44px;
            height: 44px;
            padding: 0;
            display: none;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.11);
            border-radius: 50%;
            background: transparent;
            color: #f6f8f6;
            cursor: pointer;
        }

        .mobileMenu {
            max-height: 0;
            overflow: hidden;
            border-top: 1px solid transparent;
            background: #080c0a;
            transition:
                max-height 0.3s ease,
                border-color 0.3s ease;
        }

        .mobileMenu.open {
            max-height: 430px;
            border-color: rgba(255, 255, 255, 0.07);
        }

        .mobileMenu nav {
            width: min(100% - 36px, 720px);
            margin: 0 auto;
            padding: 14px 0 24px;
        }

        .mobileMenu button {
            width: 100%;
            min-height: 70px;
            padding: 0;
            display: grid;
            grid-template-columns: 40px 1fr auto;
            gap: 14px;
            align-items: center;
            border: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.07);
            background: transparent;
            color: #f6f8f6;
            cursor: pointer;
            text-align: left;
            transition: color 0.2s ease;        }

        .mobileMenu button.active {
            color: #76ff9d;
        }

        .mobileMenu button:hover {
        }

        .menuNumber {
            color: #76ff9d;
            font-family: "Antonio", sans-serif;
            font-size: 0.58rem;
            font-weight: 600;
            letter-spacing: 0.12em;
        }

        .menuContent {
            display: flex;
            flex-direction: column;
            gap: 3px;
        }

        .menuContent strong {
            font-family: "Antonio", sans-serif;
            font-size: 1.35rem;
            font-weight: 600;
            text-transform: uppercase;
        }

        .menuContent small {
            color: #606c64;
            font-family: "Antonio", sans-serif;
            font-size: 0.5rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }

        .mobileMenu button > svg {
            color: #76ff9d;
        }

        @media (max-width: 1050px) {
            .desktopNav button {
                min-width: auto;
                padding: 0 12px;
            }

            .desktopNav button::after {
                right: 12px;
                left: 12px;
            }

            .githubLink span {
                display: none;
            }
        }

        @media (max-width: 900px) {
            .headerInner {
                width: min(100% - 36px, 1440px);
                min-height: 76px;
                grid-template-columns: auto auto;
                justify-content: space-between;
            }

            .desktopNav,
            .githubLink {
                display: none;
            }

            .menuButton {
                display: inline-flex;
            }
        }

        @media (max-width: 480px) {
            .headerInner {
                width: calc(100% - 28px);
            }

            .brandText strong {
                font-size: 1rem;
            }
        }
    `,
};
