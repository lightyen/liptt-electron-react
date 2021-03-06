export class Control {
    public static Yes() {
        return Buffer.from([0x79, 0x0d])
    }

    public static No() {
        return Buffer.from([0x6e, 0x0d])
    }

    public static Up() {
        return Buffer.from([0x1b, 0x5b, 0x41])
    }

    public static Down() {
        return Buffer.from([0x1b, 0x5b, 0x42])
    }

    public static Right() {
        return Buffer.from([0x1b, 0x5b, 0x43])
    }

    public static Left() {
        return Buffer.from([0x1b, 0x5b, 0x44])
    }

    public static PageUp() {
        return Buffer.from([0x1b, 0x5b, 0x35, 0x7e])
    }

    public static PageDown() {
        return Buffer.from([0x1b, 0x5b, 0x36, 0x7e])
    }

    public static Home() {
        return Buffer.from([0x1b, 0x5b, 0x31, 0x7e])
    }

    public static End() {
        return Buffer.from([0x1b, 0x5b, 0x34, 0x7e])
    }

    public static AnyKey() {
        return Buffer.from([0x20])
    }

    public static Space() {
        return Buffer.from([0x20])
    }

    public static Backspace() {
        return Buffer.from([0x08])
    }

    public static ReloadEcho() {
        return Buffer.from([0x71, 0x72, 0x24])
    }

    public static BoardSuggest() {
        return Buffer.from([0x73])
    }

    // Main Page

    /** (A)nnounce 精華公佈欄 */
    public static Announce() {
        return Buffer.from([0x41, 0x0d])
    }

    /** (F)avorite 我的最愛 */
    public static Favorite() {
        return Buffer.from([0x46, 0x0d])
    }

    /** (C)lass 分組討論區 */
    public static Class() {
        return Buffer.from([0x43, 0x0d])
    }

    /** (M)ail 私人信件區 */
    public static Mail() {
        return Buffer.from([0x4d, 0x0d])
    }

    /** (T)alk 休閒聊天區 */
    public static Talk() {
        return Buffer.from([0x54, 0x0d])
    }

    /** (U)ser 個人設定區 */
    public static User() {
        return Buffer.from([0x55, 0x0d])
    }

    /** (X)yz 系統資訊區 */
    public static Xyz() {
        return Buffer.from([0x58, 0x0d])
    }

    /** (P)lay 娛樂與休閒 */
    public static Play() {
        return Buffer.from([0x50, 0x0d])
    }

    /** (N)amelist 編特別名單 */
    public static Namelist() {
        return Buffer.from([0x4e, 0x0d])
    }

    /** (G)oodbye 再見 */
    public static Goodbye() {
        return Buffer.from([0x47, 0x0d, 0x79, 0x0d])
    }

    // PTT 信箱服務

    /** 寄站內信 */
    public static SendMail() {
        return Buffer.from([0x53, 0x0d])
    }

    public static r() {
        return Buffer.from([0x72])
    }

    public static CtrlC() {
        return Buffer.from([0x03])
    }

    public static CtrlU() {
        return Buffer.from([0x15])
    }

    public static CtrlP() {
        return Buffer.from([0x10])
    }

    public static CtrlX() {
        return Buffer.from([0x18])
    }
}
