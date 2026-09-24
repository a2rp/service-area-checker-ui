import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        position: relative;
        padding: 76px 24px 28px;
        overflow: hidden;
        background: #060906;
        color: #f4f7f4;

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 50%;
            width: min(1440px, calc(100% - 48px));
            height: 1px;
            background: rgba(255, 255, 255, 0.08);
            transform: translateX(-50%);
        }

        .footerInner {
            position: relative;
            z-index: 2;
            width: min(1440px, 100%);
            margin: 0 auto;
        }

        .footerTop {
            display: grid;
            grid-template-columns: minmax(300px, 1.2fr) 0.7fr 1fr;
            gap: clamp(50px, 7vw, 110px);
        }

        .brand {
            display: flex;
            align-items: center;
            gap: 13px;
        }

        .brandIcon {
            width: 46px;
            height: 46px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(118, 255, 157, 0.24);
            border-radius: 50%;
            background: rgba(118, 255, 157, 0.06);
            color: #76ff9d;
        }

        .brandIcon svg {
            width: 19px;
            height: 19px;
        }

        .brandText {
            display: flex;
            flex-direction: column;
            font-family: "Antonio", sans-serif;
            line-height: 0.95;
            text-transform: uppercase;
        }

        .brandText strong {
            font-size: 1.35rem;
            font-weight: 700;
            letter-spacing: 0.02em;
        }

        .brandText span {
            margin-top: 5px;
            color: #76ff9d;
            font-size: 0.66rem;
            font-weight: 600;
            letter-spacing: 0.18em;
        }

        .brandColumn > p {
            max-width: 470px;
            margin-top: 24px;
            color: #737e76;
            font-size: 0.78rem;
            line-height: 1.75;
        }

        .emailLink {
            width: fit-content;
            margin-top: 22px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #9ca79f;
            font-size: 0.72rem;
            transition: color 0.2s ease;
        }

        .emailLink:hover {
            color: #76ff9d;
        }

        .emailLink svg {
            color: #76ff9d;
        }

        .columnLabel {
            display: block;
            margin-bottom: 20px;
            color: #515b54;
            font-family: "Antonio", sans-serif;
            font-size: 0.56rem;
            font-weight: 600;
            letter-spacing: 0.16em;
        }

        .footerLinks {
            display: grid;
        }

        .footerLinks a {
            min-height: 48px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.07);
            color: #a0aaa3;
            font-family: "Antonio", sans-serif;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            transition:
                color 0.2s ease,
                padding-left 0.2s ease;
        }

        .footerLinks a:hover {
            padding-left: 5px;
            color: #76ff9d;
        }

        .footerLinks svg {
            width: 14px;
            height: 14px;
        }

        .socialGrid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
        }

        .socialGrid a {
            min-height: 58px;
            padding: 0 14px;
            display: grid;
            grid-template-columns: auto 1fr auto;
            gap: 10px;
            align-items: center;
            border: 1px solid rgba(255, 255, 255, 0.07);
            border-radius: 13px;
            background: rgba(255, 255, 255, 0.02);
            color: #8f9a92;
            font-size: 0.68rem;
            transition:
                border-color 0.2s ease,
                background 0.2s ease,
                color 0.2s ease,
                transform 0.2s ease;
        }

        .socialGrid a:hover {
            border-color: rgba(118, 255, 157, 0.2);
            background: rgba(118, 255, 157, 0.05);
            color: #f4f7f4;
            transform: translateY(-2px);
        }

        .socialGrid a > svg:first-child {
            color: #76ff9d;
        }

        .socialGrid a > svg:last-child {
            width: 12px;
            height: 12px;
            color: #59645c;
        }

        .footerDivider {
            height: 1px;
            margin-top: 64px;
            background: rgba(255, 255, 255, 0.08);
        }

        .footerBottom {
            min-height: 72px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 30px;
        }

        .copyright {
            display: flex;
            gap: 12px;
            color: #59635c;
            font-size: 0.62rem;
        }

        .buildMeta {
            display: flex;
            align-items: center;
            gap: 20px;
            color: #59635c;
            font-family: "Antonio", sans-serif;
            font-size: 0.56rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.09em;
        }

        .buildMeta span:first-child {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            color: #7d8980;
        }

        .buildMeta i {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #76ff9d;
            box-shadow: 0 0 10px rgba(118, 255, 157, 0.45);
        }

        .iconOnlyGrid { grid-template-columns: repeat(3, minmax(48px, 1fr)); }
        .iconOnlyGrid a { min-height: 48px; padding: 0; display: grid; place-items: center; grid-template-columns: 1fr; }
        .iconOnlyGrid a > svg { width: 18px; height: 18px; }

        @media (max-width: 1050px) {
            .footerTop {
                grid-template-columns: 1fr 1fr;
            }

            .brandColumn {
                grid-column: 1 / -1;
                max-width: 640px;
            }
        }

        @media (max-width: 700px) {
            padding: 62px 18px 22px;

            .footerTop {
                grid-template-columns: 1fr;
                gap: 44px;
            }

            .brandColumn {
                grid-column: auto;
            }

            .socialGrid {
                grid-template-columns: 1fr;
            }

            .footerDivider {
                margin-top: 48px;
            }

            .footerBottom {
                padding: 22px 0;
                flex-direction: column;
                align-items: flex-start;
            }

            .copyright {
                flex-direction: column;
                gap: 5px;
            }

            .buildMeta {
                flex-wrap: wrap;
            }
        }
    `,
};
