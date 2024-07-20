"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@vercel";
exports.ids = ["vendor-chunks/@vercel"];
exports.modules = {

/***/ "(ssr)/./node_modules/@vercel/analytics/dist/react/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@vercel/analytics/dist/react/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Analytics: () => (/* binding */ Analytics),\n/* harmony export */   \"default\": () => (/* binding */ react_default),\n/* harmony export */   track: () => (/* binding */ track)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* __next_internal_client_entry_do_not_use__ Analytics,default,track auto */ // src/react.tsx\n\n// package.json\nvar name = \"@vercel/analytics\";\nvar version = \"1.0.1\";\n// src/queue.ts\nvar initQueue = ()=>{\n    if (window.va) return;\n    window.va = function a(...params) {\n        (window.vaq = window.vaq || []).push(params);\n    };\n};\n// src/utils.ts\nfunction isBrowser() {\n    return \"undefined\" !== \"undefined\";\n}\nfunction detectEnvironment() {\n    try {\n        const env = \"development\";\n        if (env === \"development\" || env === \"test\") {\n            return \"development\";\n        }\n    } catch (e) {}\n    return \"production\";\n}\nfunction setMode(mode = \"auto\") {\n    if (mode === \"auto\") {\n        window.vam = detectEnvironment();\n        return;\n    }\n    window.vam = mode;\n}\nfunction getMode() {\n    return window.vam || \"production\";\n}\nfunction isProduction() {\n    return getMode() === \"production\";\n}\nfunction isDevelopment() {\n    return getMode() === \"development\";\n}\nfunction removeKey(key, { [key]: _, ...rest }) {\n    return rest;\n}\nfunction parseProperties(properties, options) {\n    let props = properties;\n    const errorProperties = [];\n    for (const [key, value] of Object.entries(properties)){\n        if (typeof value === \"object\" && value !== null) {\n            if (options.strip) {\n                props = removeKey(key, props);\n            } else {\n                errorProperties.push(key);\n            }\n        }\n    }\n    if (errorProperties.length > 0 && !options.strip) {\n        throw Error(`The following properties are not valid: ${errorProperties.join(\", \")}. Only strings, numbers, booleans, and null are allowed.`);\n    }\n    return props;\n}\n// src/generic.ts\nfunction inject(props = {\n    debug: true\n}) {\n    var _a;\n    if (!isBrowser()) return;\n    setMode(props.mode);\n    initQueue();\n    if (props.beforeSend) {\n        (_a = window.va) == null ? void 0 : _a.call(window, \"beforeSend\", props.beforeSend);\n    }\n    const src = isDevelopment() ? \"https://va.vercel-scripts.com/v1/script.debug.js\" : \"/_vercel/insights/script.js\";\n    if (document.head.querySelector(`script[src*=\"${src}\"]`)) return;\n    const script = document.createElement(\"script\");\n    script.src = src;\n    script.defer = true;\n    script.setAttribute(\"data-sdkn\", name);\n    script.setAttribute(\"data-sdkv\", version);\n    if (isDevelopment() && props.debug === false) {\n        script.setAttribute(\"data-debug\", \"false\");\n    }\n    document.head.appendChild(script);\n}\nfunction track(name2, properties) {\n    var _a, _b;\n    if (!isBrowser()) {\n        console.warn(\"[Vercel Web Analytics] Server-side execution of `track()` is currently not supported.\");\n        return;\n    }\n    if (!properties) {\n        (_a = window.va) == null ? void 0 : _a.call(window, \"event\", {\n            name: name2\n        });\n        return;\n    }\n    try {\n        const props = parseProperties(properties, {\n            strip: isProduction()\n        });\n        (_b = window.va) == null ? void 0 : _b.call(window, \"event\", {\n            name: name2,\n            data: props\n        });\n    } catch (err) {\n        if (err instanceof Error && isDevelopment()) {\n            console.error(err);\n        }\n    }\n}\n// src/react.tsx\nfunction Analytics({ beforeSend, debug = true, mode = \"auto\" }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        inject({\n            beforeSend,\n            debug,\n            mode\n        });\n    }, [\n        beforeSend,\n        debug,\n        mode\n    ]);\n    return null;\n}\nvar react_default = {\n    Analytics,\n    track\n};\n //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHZlcmNlbC9hbmFseXRpY3MvZGlzdC9yZWFjdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjs7Ozs7QUNBbkIsSUFBTUMsWUFBWTtJQUV2QixJQUFJQyxPQUFPQyxFQUFBLEVBQUk7SUFFZkQsT0FBT0MsRUFBQSxHQUFLLFNBQVNDLEVBQUEsR0FBS0MsTUFBQTtRQUN2QkgsQ0FBQUEsT0FBT0ksR0FBQSxHQUFNSixPQUFPSSxHQUFBLElBQU8sRUFBQyxFQUFHQyxJQUFBLENBQUtGO0lBQ3ZDO0FBQ0Y7O0FDTE8sU0FBU0c7SUFDZCxPQUFPLGdCQUFrQjtBQUMzQjtBQUVBLFNBQVNDO0lBQ1AsSUFBSTtRQUNGLE1BQU1DO1FBQ04sSUFBSUEsUUFBUSxpQkFBaUJBLFFBQVEsUUFBUTtZQUMzQyxPQUFPO1FBQ1Q7SUFDRixTQUFTQyxHQUFQLENBRUY7SUFDQSxPQUFPO0FBQ1Q7QUFFTyxTQUFTQyxRQUFRQyxPQUFhO0lBQ25DLElBQUlBLFNBQVMsUUFBUTtRQUNuQlgsT0FBT1ksR0FBQSxHQUFNTDtRQUNiO0lBQ0Y7SUFFQVAsT0FBT1ksR0FBQSxHQUFNRDtBQUNmO0FBRU8sU0FBU0U7SUFDZCxPQUFPYixPQUFPWSxHQUFBLElBQU87QUFDdkI7QUFFTyxTQUFTRTtJQUNkLE9BQU9ELGNBQWM7QUFDdkI7QUFFTyxTQUFTRTtJQUNkLE9BQU9GLGNBQWM7QUFDdkI7QUFFQSxTQUFTRyxVQUNQQyxHQUFBLEVBQ0EsR0FBR0EsSUFBQSxFQUFNQyxDQUFBLEtBQU1DLE1BQUs7SUFFcEIsT0FBT0E7QUFDVDtBQUVPLFNBQVNDLGdCQUNkQyxVQUFBLEVBQ0FDLE9BQUE7SUFJQSxJQUFJQyxRQUFRRjtJQUNaLE1BQU1HLGtCQUE0QixFQUFDO0lBQ25DLFdBQVcsQ0FBQ1AsS0FBS1EsTUFBSyxJQUFLQyxPQUFPQyxPQUFBLENBQVFOLFlBQWE7UUFDckQsSUFBSSxPQUFPSSxVQUFVLFlBQVlBLFVBQVUsTUFBTTtZQUMvQyxJQUFJSCxRQUFRTSxLQUFBLEVBQU87Z0JBQ2pCTCxRQUFRUCxVQUFVQyxLQUFLTTtZQUN6QixPQUFPO2dCQUNMQyxnQkFBZ0JuQixJQUFBLENBQUtZO1lBQ3ZCO1FBQ0Y7SUFDRjtJQUVBLElBQUlPLGdCQUFnQkssTUFBQSxHQUFTLEtBQUssQ0FBQ1AsUUFBUU0sS0FBQSxFQUFPO1FBQ2hELE1BQU1FLE1BQ0osMkNBQTJDTixnQkFBZ0JPLElBQUEsQ0FDekQsTUFDRjtJQUVKO0lBQ0EsT0FBT1I7QUFDVDs7QUNuRE8sU0FBU1MsT0FDZFQsUUFBd0I7SUFDdEJVLE9BQU87QUFDVDtJQXhCRixJQUFBQztJQTBCRSxJQUFJLENBQUM1QixhQUFhO0lBRWxCSSxRQUFRYSxNQUFNWixJQUFJO0lBRWxCWjtJQUVBLElBQUl3QixNQUFNWSxVQUFBLEVBQVk7UUFDcEJELENBQUFBLEtBQUFsQyxPQUFPQyxFQUFBLEtBQVAsZ0JBQUFpQyxHQUFBRSxJQUFBLENBQUFwQyxRQUFZLGNBQWN1QixNQUFNWSxVQUFBO0lBQ2xDO0lBRUEsTUFBTUUsTUFBTXRCLGtCQUNSLHFEQUNBO0lBRUosSUFBSXVCLFNBQVNDLElBQUEsQ0FBS0MsYUFBQSxDQUFjLGdCQUFnQkgsSUFBQSxHQUFPLEdBQUc7SUFFMUQsTUFBTUksU0FBU0gsU0FBU0ksYUFBQSxDQUFjO0lBQ3RDRCxPQUFPSixHQUFBLEdBQU1BO0lBQ2JJLE9BQU9FLEtBQUEsR0FBUTtJQUNmRixPQUFPRyxZQUFBLENBQWEsYUFBYUM7SUFDakNKLE9BQU9HLFlBQUEsQ0FBYSxhQUFhRTtJQUVqQyxJQUFJL0IsbUJBQW1CUSxNQUFNVSxLQUFBLEtBQVUsT0FBTztRQUM1Q1EsT0FBT0csWUFBQSxDQUFhLGNBQWM7SUFDcEM7SUFFQU4sU0FBU0MsSUFBQSxDQUFLUSxXQUFBLENBQVlOO0FBQzVCO0FBUU8sU0FBU08sTUFDZEgsS0FBQUEsRUFDQXhCLFVBQUE7SUEvREYsSUFBQWEsSUFBQWU7SUFpRUUsSUFBSSxDQUFDM0MsYUFBYTtRQUVoQjRDLFFBQVFDLElBQUEsQ0FDTjtRQUVGO0lBQ0Y7SUFFQSxJQUFJLENBQUM5QixZQUFZO1FBQ2ZhLENBQUFBLEtBQUFsQyxPQUFPQyxFQUFBLEtBQVAsZ0JBQUFpQyxHQUFBRSxJQUFBLENBQUFwQyxRQUFZLFNBQVM7WUFBRTZDLE1BQUFBO1FBQUs7UUFDNUI7SUFDRjtJQUVBLElBQUk7UUFDRixNQUFNdEIsUUFBUUgsZ0JBQWdCQyxZQUFZO1lBQ3hDTyxPQUFPZDtRQUNUO1FBRUFtQyxDQUFBQSxLQUFBakQsT0FBT0MsRUFBQSxLQUFQLGdCQUFBZ0QsR0FBQWIsSUFBQSxDQUFBcEMsUUFBWSxTQUFTO1lBQ25CNkMsTUFBQUE7WUFDQU8sTUFBTTdCO1FBQ1I7SUFDRixTQUFTOEIsS0FBUDtRQUNBLElBQUlBLGVBQWV2QixTQUFTZixpQkFBaUI7WUFFM0NtQyxRQUFRSSxLQUFBLENBQU1EO1FBQ2hCO0lBQ0Y7QUFDRjs7QUhsRUEsU0FBU0UsVUFBVSxFQUNqQnBCLFVBQUEsRUFDQUYsUUFBUSxNQUNSdEIsT0FBTyxRQUNUO0lBQ0ViLGdEQUFTQSxDQUFDO1FBQ1JrQyxPQUFPO1lBQUVHO1lBQVlGO1lBQU90QjtRQUFLO0lBQ25DLEdBQUc7UUFBQ3dCO1FBQVlGO1FBQU90QjtLQUFLO0lBRTVCLE9BQU87QUFDVDtBQUtBLElBQU82QyxnQkFBUTtJQUNiRDtJQUNBUDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3Blbi1yZXN1bWUvLi4vLi4vc3JjL3JlYWN0LnRzeD80Nzc3Iiwid2VicGFjazovL29wZW4tcmVzdW1lLy4uLy4uL3NyYy9xdWV1ZS50cz84NzNlIiwid2VicGFjazovL29wZW4tcmVzdW1lLy4uLy4uL3NyYy91dGlscy50cz82MjUyIiwid2VicGFjazovL29wZW4tcmVzdW1lLy4uLy4uL3NyYy9nZW5lcmljLnRzPzBiZGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaW5qZWN0LCB0cmFjayB9IGZyb20gJy4vZ2VuZXJpYyc7XG5pbXBvcnQgdHlwZSB7IEFuYWx5dGljc1Byb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5cbi8qKlxuICogSW5qZWN0cyB0aGUgVmVyY2VsIFdlYiBBbmFseXRpY3Mgc2NyaXB0IGludG8gdGhlIHBhZ2UgaGVhZCBhbmQgc3RhcnRzIHRyYWNraW5nIHBhZ2Ugdmlld3MuIFJlYWQgbW9yZSBpbiBvdXIgW2RvY3VtZW50YXRpb25dKGh0dHBzOi8vdmVyY2VsLmNvbS9kb2NzL2NvbmNlcHRzL2FuYWx5dGljcy9wYWNrYWdlKS5cbiAqIEBwYXJhbSBbcHJvcHNdIC0gQW5hbHl0aWNzIG9wdGlvbnMuXG4gKiBAcGFyYW0gW3Byb3BzLm1vZGVdIC0gVGhlIG1vZGUgdG8gdXNlIGZvciB0aGUgYW5hbHl0aWNzIHNjcmlwdC4gRGVmYXVsdHMgdG8gYGF1dG9gLlxuICogIC0gYGF1dG9gIC0gQXV0b21hdGljYWxseSBkZXRlY3QgdGhlIGVudmlyb25tZW50LiAgVXNlcyBgcHJvZHVjdGlvbmAgaWYgdGhlIGVudmlyb25tZW50IGNhbm5vdCBiZSBkZXRlcm1pbmVkLlxuICogIC0gYHByb2R1Y3Rpb25gIC0gQWx3YXlzIHVzZSB0aGUgcHJvZHVjdGlvbiBzY3JpcHQuIChTZW5kcyBldmVudHMgdG8gdGhlIHNlcnZlcilcbiAqICAtIGBkZXZlbG9wbWVudGAgLSBBbHdheXMgdXNlIHRoZSBkZXZlbG9wbWVudCBzY3JpcHQuIChMb2dzIGV2ZW50cyB0byB0aGUgY29uc29sZSlcbiAqIEBwYXJhbSBbcHJvcHMuZGVidWddIC0gV2hldGhlciB0byBlbmFibGUgZGVidWcgbG9nZ2luZyBpbiBkZXZlbG9wbWVudC4gRGVmYXVsdHMgdG8gYHRydWVgLlxuICogQHBhcmFtIFtwcm9wcy5iZWZvcmVTZW5kXSAtIEEgbWlkZGxld2FyZSBmdW5jdGlvbiB0byBtb2RpZnkgZXZlbnRzIGJlZm9yZSB0aGV5IGFyZSBzZW50LiBTaG91bGQgcmV0dXJuIHRoZSBldmVudCBvYmplY3Qgb3IgYG51bGxgIHRvIGNhbmNlbCB0aGUgZXZlbnQuXG4gKiBAZXhhbXBsZVxuICogYGBganNcbiAqIGltcG9ydCB7IEFuYWx5dGljcyB9IGZyb20gJ0B2ZXJjZWwvYW5hbHl0aWNzL3JlYWN0JztcbiAqXG4gKiBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gKiAgcmV0dXJuIChcbiAqICAgPGRpdj5cbiAqICAgIDxBbmFseXRpY3MgLz5cbiAqICAgIDxoMT5NeSBBcHA8L2gxPlxuICogIDwvZGl2PlxuICogKTtcbiAqIH1cbiAqIGBgYFxuICovXG5mdW5jdGlvbiBBbmFseXRpY3Moe1xuICBiZWZvcmVTZW5kLFxuICBkZWJ1ZyA9IHRydWUsXG4gIG1vZGUgPSAnYXV0bycsXG59OiBBbmFseXRpY3NQcm9wcyk6IG51bGwge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGluamVjdCh7IGJlZm9yZVNlbmQsIGRlYnVnLCBtb2RlIH0pO1xuICB9LCBbYmVmb3JlU2VuZCwgZGVidWcsIG1vZGVdKTtcblxuICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydCB7IHRyYWNrLCBBbmFseXRpY3MgfTtcbmV4cG9ydCB0eXBlIHsgQW5hbHl0aWNzUHJvcHMgfTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IGRlZmF1bHQge1xuICBBbmFseXRpY3MsXG4gIHRyYWNrLFxufTtcbiIsImV4cG9ydCBjb25zdCBpbml0UXVldWUgPSAoKTogdm9pZCA9PiB7XG4gIC8vIGluaXRpYWxpemUgdmEgdW50aWwgc2NyaXB0IGlzIGxvYWRlZFxuICBpZiAod2luZG93LnZhKSByZXR1cm47XG5cbiAgd2luZG93LnZhID0gZnVuY3Rpb24gYSguLi5wYXJhbXMpOiB2b2lkIHtcbiAgICAod2luZG93LnZhcSA9IHdpbmRvdy52YXEgfHwgW10pLnB1c2gocGFyYW1zKTtcbiAgfTtcbn07XG4iLCJpbXBvcnQgdHlwZSB7IEFsbG93ZWRQcm9wZXJ0eVZhbHVlcywgTW9kZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNCcm93c2VyKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG59XG5cbmZ1bmN0aW9uIGRldGVjdEVudmlyb25tZW50KCk6ICdkZXZlbG9wbWVudCcgfCAncHJvZHVjdGlvbicge1xuICB0cnkge1xuICAgIGNvbnN0IGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WO1xuICAgIGlmIChlbnYgPT09ICdkZXZlbG9wbWVudCcgfHwgZW52ID09PSAndGVzdCcpIHtcbiAgICAgIHJldHVybiAnZGV2ZWxvcG1lbnQnO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIGRvIG5vdGhpbmcsIHRoaXMgaXMgb2theVxuICB9XG4gIHJldHVybiAncHJvZHVjdGlvbic7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRNb2RlKG1vZGU6IE1vZGUgPSAnYXV0bycpOiB2b2lkIHtcbiAgaWYgKG1vZGUgPT09ICdhdXRvJykge1xuICAgIHdpbmRvdy52YW0gPSBkZXRlY3RFbnZpcm9ubWVudCgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHdpbmRvdy52YW0gPSBtb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9kZSgpOiBNb2RlIHtcbiAgcmV0dXJuIHdpbmRvdy52YW0gfHwgJ3Byb2R1Y3Rpb24nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm9kdWN0aW9uKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gZ2V0TW9kZSgpID09PSAncHJvZHVjdGlvbic7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RldmVsb3BtZW50KCk6IGJvb2xlYW4ge1xuICByZXR1cm4gZ2V0TW9kZSgpID09PSAnZGV2ZWxvcG1lbnQnO1xufVxuXG5mdW5jdGlvbiByZW1vdmVLZXkoXG4gIGtleTogc3RyaW5nLFxuICB7IFtrZXldOiBfLCAuLi5yZXN0IH0sXG4pOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB7XG4gIHJldHVybiByZXN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQcm9wZXJ0aWVzKFxuICBwcm9wZXJ0aWVzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgb3B0aW9uczoge1xuICAgIHN0cmlwPzogYm9vbGVhbjtcbiAgfSxcbik6IEVycm9yIHwgUmVjb3JkPHN0cmluZywgQWxsb3dlZFByb3BlcnR5VmFsdWVzPiB8IHVuZGVmaW5lZCB7XG4gIGxldCBwcm9wcyA9IHByb3BlcnRpZXM7XG4gIGNvbnN0IGVycm9yUHJvcGVydGllczogc3RyaW5nW10gPSBbXTtcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocHJvcGVydGllcykpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKG9wdGlvbnMuc3RyaXApIHtcbiAgICAgICAgcHJvcHMgPSByZW1vdmVLZXkoa2V5LCBwcm9wcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvclByb3BlcnRpZXMucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChlcnJvclByb3BlcnRpZXMubGVuZ3RoID4gMCAmJiAhb3B0aW9ucy5zdHJpcCkge1xuICAgIHRocm93IEVycm9yKFxuICAgICAgYFRoZSBmb2xsb3dpbmcgcHJvcGVydGllcyBhcmUgbm90IHZhbGlkOiAke2Vycm9yUHJvcGVydGllcy5qb2luKFxuICAgICAgICAnLCAnLFxuICAgICAgKX0uIE9ubHkgc3RyaW5ncywgbnVtYmVycywgYm9vbGVhbnMsIGFuZCBudWxsIGFyZSBhbGxvd2VkLmAsXG4gICAgKTtcbiAgfVxuICByZXR1cm4gcHJvcHMgYXMgUmVjb3JkPHN0cmluZywgQWxsb3dlZFByb3BlcnR5VmFsdWVzPjtcbn1cbiIsImltcG9ydCB7IG5hbWUgYXMgcGFja2FnZU5hbWUsIHZlcnNpb24gfSBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgaW5pdFF1ZXVlIH0gZnJvbSAnLi9xdWV1ZSc7XG5pbXBvcnQgdHlwZSB7IEFsbG93ZWRQcm9wZXJ0eVZhbHVlcywgQW5hbHl0aWNzUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7XG4gIGlzQnJvd3NlcixcbiAgcGFyc2VQcm9wZXJ0aWVzLFxuICBzZXRNb2RlLFxuICBpc0RldmVsb3BtZW50LFxuICBpc1Byb2R1Y3Rpb24sXG59IGZyb20gJy4vdXRpbHMnO1xuXG4vKipcbiAqIEluamVjdHMgdGhlIFZlcmNlbCBXZWIgQW5hbHl0aWNzIHNjcmlwdCBpbnRvIHRoZSBwYWdlIGhlYWQgYW5kIHN0YXJ0cyB0cmFja2luZyBwYWdlIHZpZXdzLiBSZWFkIG1vcmUgaW4gb3VyIFtkb2N1bWVudGF0aW9uXShodHRwczovL3ZlcmNlbC5jb20vZG9jcy9jb25jZXB0cy9hbmFseXRpY3MvcGFja2FnZSkuXG4gKiBAcGFyYW0gW3Byb3BzXSAtIEFuYWx5dGljcyBvcHRpb25zLlxuICogQHBhcmFtIFtwcm9wcy5tb2RlXSAtIFRoZSBtb2RlIHRvIHVzZSBmb3IgdGhlIGFuYWx5dGljcyBzY3JpcHQuIERlZmF1bHRzIHRvIGBhdXRvYC5cbiAqICAtIGBhdXRvYCAtIEF1dG9tYXRpY2FsbHkgZGV0ZWN0IHRoZSBlbnZpcm9ubWVudC4gIFVzZXMgYHByb2R1Y3Rpb25gIGlmIHRoZSBlbnZpcm9ubWVudCBjYW5ub3QgYmUgZGV0ZXJtaW5lZC5cbiAqICAtIGBwcm9kdWN0aW9uYCAtIEFsd2F5cyB1c2UgdGhlIHByb2R1Y3Rpb24gc2NyaXB0LiAoU2VuZHMgZXZlbnRzIHRvIHRoZSBzZXJ2ZXIpXG4gKiAgLSBgZGV2ZWxvcG1lbnRgIC0gQWx3YXlzIHVzZSB0aGUgZGV2ZWxvcG1lbnQgc2NyaXB0LiAoTG9ncyBldmVudHMgdG8gdGhlIGNvbnNvbGUpXG4gKiBAcGFyYW0gW3Byb3BzLmRlYnVnXSAtIFdoZXRoZXIgdG8gZW5hYmxlIGRlYnVnIGxvZ2dpbmcgaW4gZGV2ZWxvcG1lbnQuIERlZmF1bHRzIHRvIGB0cnVlYC5cbiAqIEBwYXJhbSBbcHJvcHMuYmVmb3JlU2VuZF0gLSBBIG1pZGRsZXdhcmUgZnVuY3Rpb24gdG8gbW9kaWZ5IGV2ZW50cyBiZWZvcmUgdGhleSBhcmUgc2VudC4gU2hvdWxkIHJldHVybiB0aGUgZXZlbnQgb2JqZWN0IG9yIGBudWxsYCB0byBjYW5jZWwgdGhlIGV2ZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5qZWN0KFxuICBwcm9wczogQW5hbHl0aWNzUHJvcHMgPSB7XG4gICAgZGVidWc6IHRydWUsXG4gIH0sXG4pOiB2b2lkIHtcbiAgaWYgKCFpc0Jyb3dzZXIoKSkgcmV0dXJuO1xuXG4gIHNldE1vZGUocHJvcHMubW9kZSk7XG5cbiAgaW5pdFF1ZXVlKCk7XG5cbiAgaWYgKHByb3BzLmJlZm9yZVNlbmQpIHtcbiAgICB3aW5kb3cudmE/LignYmVmb3JlU2VuZCcsIHByb3BzLmJlZm9yZVNlbmQpO1xuICB9XG5cbiAgY29uc3Qgc3JjID0gaXNEZXZlbG9wbWVudCgpXG4gICAgPyAnaHR0cHM6Ly92YS52ZXJjZWwtc2NyaXB0cy5jb20vdjEvc2NyaXB0LmRlYnVnLmpzJ1xuICAgIDogJy9fdmVyY2VsL2luc2lnaHRzL3NjcmlwdC5qcyc7XG5cbiAgaWYgKGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyYyo9XCIke3NyY31cIl1gKSkgcmV0dXJuO1xuXG4gIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICBzY3JpcHQuc3JjID0gc3JjO1xuICBzY3JpcHQuZGVmZXIgPSB0cnVlO1xuICBzY3JpcHQuc2V0QXR0cmlidXRlKCdkYXRhLXNka24nLCBwYWNrYWdlTmFtZSk7XG4gIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2RrdicsIHZlcnNpb24pO1xuXG4gIGlmIChpc0RldmVsb3BtZW50KCkgJiYgcHJvcHMuZGVidWcgPT09IGZhbHNlKSB7XG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnZGF0YS1kZWJ1ZycsICdmYWxzZScpO1xuICB9XG5cbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufVxuXG4vKipcbiAqIFRyYWNrcyBhIGN1c3RvbSBldmVudC4gUGxlYXNlIHJlZmVyIHRvIHRoZSBbZG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly92ZXJjZWwuY29tL2RvY3MvY29uY2VwdHMvYW5hbHl0aWNzL2N1c3RvbS1ldmVudHMpIGZvciBtb3JlIGluZm9ybWF0aW9uIG9uIGN1c3RvbSBldmVudHMuXG4gKiBAcGFyYW0gbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudC5cbiAqICogRXhhbXBsZXM6IGBQdXJjaGFzZWAsIGBDbGljayBCdXR0b25gLCBvciBgUGxheSBWaWRlb2AuXG4gKiBAcGFyYW0gW3Byb3BlcnRpZXNdIC0gQWRkaXRpb25hbCBwcm9wZXJ0aWVzIG9mIHRoZSBldmVudC4gTmVzdGVkIG9iamVjdHMgYXJlIG5vdCBzdXBwb3J0ZWQuIEFsbG93ZWQgdmFsdWVzIGFyZSBgc3RyaW5nYCwgYG51bWJlcmAsIGBib29sZWFuYCwgYW5kIGBudWxsYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYWNrKFxuICBuYW1lOiBzdHJpbmcsXG4gIHByb3BlcnRpZXM/OiBSZWNvcmQ8c3RyaW5nLCBBbGxvd2VkUHJvcGVydHlWYWx1ZXM+LFxuKTogdm9pZCB7XG4gIGlmICghaXNCcm93c2VyKCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybihcbiAgICAgICdbVmVyY2VsIFdlYiBBbmFseXRpY3NdIFNlcnZlci1zaWRlIGV4ZWN1dGlvbiBvZiBgdHJhY2soKWAgaXMgY3VycmVudGx5IG5vdCBzdXBwb3J0ZWQuJyxcbiAgICApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghcHJvcGVydGllcykge1xuICAgIHdpbmRvdy52YT8uKCdldmVudCcsIHsgbmFtZSB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHByb3BzID0gcGFyc2VQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIHtcbiAgICAgIHN0cmlwOiBpc1Byb2R1Y3Rpb24oKSxcbiAgICB9KTtcblxuICAgIHdpbmRvdy52YT8uKCdldmVudCcsIHtcbiAgICAgIG5hbWUsXG4gICAgICBkYXRhOiBwcm9wcyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yICYmIGlzRGV2ZWxvcG1lbnQoKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IGRlZmF1bHQge1xuICBpbmplY3QsXG4gIHRyYWNrLFxufTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJpbml0UXVldWUiLCJ3aW5kb3ciLCJ2YSIsImEiLCJwYXJhbXMiLCJ2YXEiLCJwdXNoIiwiaXNCcm93c2VyIiwiZGV0ZWN0RW52aXJvbm1lbnQiLCJlbnYiLCJlIiwic2V0TW9kZSIsIm1vZGUiLCJ2YW0iLCJnZXRNb2RlIiwiaXNQcm9kdWN0aW9uIiwiaXNEZXZlbG9wbWVudCIsInJlbW92ZUtleSIsImtleSIsIl8iLCJyZXN0IiwicGFyc2VQcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsIm9wdGlvbnMiLCJwcm9wcyIsImVycm9yUHJvcGVydGllcyIsInZhbHVlIiwiT2JqZWN0IiwiZW50cmllcyIsInN0cmlwIiwibGVuZ3RoIiwiRXJyb3IiLCJqb2luIiwiaW5qZWN0IiwiZGVidWciLCJfYSIsImJlZm9yZVNlbmQiLCJjYWxsIiwic3JjIiwiZG9jdW1lbnQiLCJoZWFkIiwicXVlcnlTZWxlY3RvciIsInNjcmlwdCIsImNyZWF0ZUVsZW1lbnQiLCJkZWZlciIsInNldEF0dHJpYnV0ZSIsIm5hbWUiLCJ2ZXJzaW9uIiwiYXBwZW5kQ2hpbGQiLCJ0cmFjayIsIl9iIiwiY29uc29sZSIsIndhcm4iLCJkYXRhIiwiZXJyIiwiZXJyb3IiLCJBbmFseXRpY3MiLCJyZWFjdF9kZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@vercel/analytics/dist/react/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/@vercel/analytics/dist/react/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@vercel/analytics/dist/react/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   Analytics: () => (/* binding */ e0),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   track: () => (/* binding */ e1)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\MONEER ASHRAF\Desktop\Preamble-Programmers_028\node_modules\@vercel\analytics\dist\react\index.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\MONEER ASHRAF\Desktop\Preamble-Programmers_028\node_modules\@vercel\analytics\dist\react\index.js#Analytics`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\MONEER ASHRAF\Desktop\Preamble-Programmers_028\node_modules\@vercel\analytics\dist\react\index.js#default`));

const e1 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\MONEER ASHRAF\Desktop\Preamble-Programmers_028\node_modules\@vercel\analytics\dist\react\index.js#track`);


/***/ })

};
;