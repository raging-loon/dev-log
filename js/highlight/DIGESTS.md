## Subresource Integrity

If you are loading Highlight.js via CDN you may wish to use [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) to guarantee that you are using a legimitate build of the library.

To do this you simply need to add the `integrity` attribute for each JavaScript file you download via CDN. These digests are used by the browser to confirm the files downloaded have not been modified.

```html
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/highlight.min.js"
  integrity="sha384-pGqTJHE/m20W4oDrfxTVzOutpMhjK3uP/0lReY0Jq/KInpuJSXUnk4WAYbciCLqT"></script>
<!-- including any other grammars you might need to load -->
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/languages/go.min.js"
  integrity="sha384-Mtb4EH3R9NMDME1sPQALOYR8KGqwrXAtmc6XGxDd0XaXB23irPKsuET0JjZt5utI"></script>
```

The full list of digests for every file can be found below.

### Digests

```
sha384-HXa6xmJHMEfHIi/hDPtTbigJQtXSLC1v3Leof82ZGiiIQHcgvyioqE8wgdLm/Mgi /es/languages/accesslog.js
sha384-QqfeezSFk3jFhiaBPAGWdCdQGBdBckwrd9PXxjsb1OObrgikKVL+tcnJYLsSReEH /es/languages/accesslog.min.js
sha384-dohVMr/cXV2TKOwUPL+/lGwXDj5WkStqxm1qggnRlXzCoAz5+E7Z29ExXaJt3Gp4 /es/languages/armasm.js
sha384-ocl2WOnIR3HmBi1ZJ2kfjMxq7rNhHxV1t4GFEmTWFMZLbHHXgdhR6HfCneMNCkt2 /es/languages/armasm.min.js
sha384-no5/zgQGupzPFGWV8VpJzfQau5/GI2v5b7I45l6nKc8gMOxzBHfgyxNdjQEnmW94 /es/languages/bash.js
sha384-u2nRnIxVxHkjnpxFScw/XgxNVuLz4dXXiT56xbp+Kk2b8AuStNgggHNpM9HO569A /es/languages/bash.min.js
sha384-qimhSkVWof5rfaFajQk8KAtzSRYyIArcJCMKWdDcNq34F4uplk08wmEyUiYLmO+3 /es/languages/c.js
sha384-5fESKgrRcGs7I/89bn7NKFcHyvIVcmQIG4JfCEAV5Rg5VVtskrmGkHVOIsD1642v /es/languages/c.min.js
sha384-xjI3wQy5aAhTr4JT9bE8tZaEMtNn/fguEQOem1vG04xZl4Ov0uf8bsLkQUoUzvbo /es/languages/cmake.js
sha384-JdSkDmOvEqN4fTPk/zl0QpN/wGh53J+xJRFtOMdEwhZ2iDgT5a/Dl18e/TChDqjK /es/languages/cmake.min.js
sha384-eM9Op3b0ilZ/iW7jeVAMo//MKcEXHCbg1Vf8SMrqds5LIOeF9+3qaX//TsnbItae /es/languages/cpp.js
sha384-+tDHTmLKfBxXgVksRhLEJM4z9PfcGQ2XsrZMDcdJ1SIlPZrtAR4+m4XUX+zJf5nf /es/languages/cpp.min.js
sha384-DRSBRBp34y5KixP9TEkoyASphUQfWiiqtSP20YveUIY05CjkoCG1wOe8A1cfMIZT /es/languages/glsl.js
sha384-0QXwzWESgZAQ8866ALLJEDZ9l14HhJTWnECXBxJ4DHDmywVn0LRIMqz7JJQWG/AM /es/languages/glsl.min.js
sha384-ZCfS+s/zxY7O2bm2KoVJo1wUrLEpJDHZAi/LJAdJF5XjnfSWICkg6wHd2SEJGpyR /es/languages/java.js
sha384-716dHwZ7zbZcnEwTe7DLxlm5tH3Iyl8vSW5a2kYPgusEdp5k3A3jeZt0Ck+CjYE0 /es/languages/java.min.js
sha384-OJrXTVCemUa68axskWVxZHXuDfyPWWFK0X2cJsPaMBt6jGY1HxnBZJVPEHTqou4H /es/languages/lua.js
sha384-cjlU8DPjZ3XY/dLzIx+CaoB2jzKXf43s2KSU2rZQGmxwR1d7k9p+SFt1IsNkFnnV /es/languages/lua.min.js
sha384-npg+R4K6p4Q5dEzYDKy3gZ+l4mGV8hDMErOZdSSvqLxED30Fhmgb54WD4wkeY5yh /es/languages/makefile.js
sha384-Ev1PV0+HiSwEbi0IfJYmpMoxv3E0sWhAALg1frIiitM9zh2BVDe871H9Z/RGXqFM /es/languages/makefile.min.js
sha384-BxojDi6ePBYN3unEc6aUEpUtUyx0Eq0i/UZPISuI2YQy6eAD5HzD0dtBC53uZ6R1 /es/languages/php.js
sha384-C28kAnknmyKQUME+2sa0tyQkFMN1S/aUSB1gQ+PKUf0+ewgxNh8CwAmd+C0UUaZ7 /es/languages/php.min.js
sha384-8aLAoO/YSb+fhxwbMNNuUeq3x/FJJvtLwRq9nYpoyy4j85IpQURkoRySqJHBFlwu /es/languages/powershell.js
sha384-LA+GHsDHAleSQDZ+9MEiJmTnrJ392Nkux5b1RIiGmzAkRo+4dwKsjS0z/pzCXIFr /es/languages/powershell.min.js
sha384-e+d8RFZbtc5Pmt3xfX9uuElm63v5qOj7T5hAkkFbnYc1wEk7wCLlzOsm66MCf5Uk /es/languages/python.js
sha384-CPHh+9FxkWF3OtMZdTj5oQN1Qti0p4/5XBABz/JdgssOKHmfAOFz6Gu4tsG6MQiH /es/languages/python.min.js
sha384-Blm/RpTi15HpdenfAja/zwDDJ6bBmIoAsFgHcNpw4u+DqKFZEpB67DIa2A1NXtZf /es/languages/ruby.js
sha384-INdPgGNAH51T3uWXoaYVa0ag70hxlbvjTlhyLicF3SuuG0BVuycs/GrFGi7gt/8a /es/languages/ruby.min.js
sha384-LZ+YGF0Xve9sHzC9G37Kc14gDC6lfDpny2hggVJVfHb+OsTEXgMGLmAWUJzi4YRC /es/languages/rust.js
sha384-/ktfWRgwL+kZAZeeXDl9mwkD/3atjwjkzLCCoSHtME7MzP87wMhUmNUZ83AoqYx2 /es/languages/rust.min.js
sha384-VYwyP5ddOUunx1AGpbtE38OKY2PbjW9kk6X6622tvqprRJk6W8/tgMvI7MqaOZZw /es/languages/shell.js
sha384-gRgqaIgHrAR1qlo866rkV1AUahqopv0dnpFFLAC4X3jYTDagRCTxQBTMFGV1+x1U /es/languages/shell.min.js
sha384-ZX3mm6sjLYWMBTMUJYzvQXYHNWVJkD+t1ppx4BysyVs6cVhvYFVuwMlVCeAwtwm9 /es/languages/sql.js
sha384-DloKeCkj/pTPHeqWu3keGoEPpZJGm44yQjSmSfpWasykAMUobM0hcYFFPsg1PE6K /es/languages/sql.min.js
sha384-BcjZoAx+JfnWI/YaICe1dbsNQwCCBWJKS5uLzyKKMiLTVxBqOIRmaUoiJnYADo0M /es/languages/x86asm.js
sha384-y1FgDrVkuSox/kv/Oib26ZqzunABWyUkirzc4i4sthq8Z7c/ReWp2XA9DCh7MHQh /es/languages/x86asm.min.js
sha384-yuc8tauP3EWSVVc7vXrAEw05ILYmK1tZpwl9pOG2D3aTNCij6+EN7iB45aoFjqXY /languages/accesslog.js
sha384-jSRPpx6rrJge30xNPZiRzm9KMbyWxprw/Are7Y34dZ90vGIUfntrU1T0W+a1RhBq /languages/accesslog.min.js
sha384-4/eoaXGY0UlWfANb3jyU/u/F701OSu1vFrwgCsXudMnlDIXGAZ4jffvuyiBgg43d /languages/armasm.js
sha384-Xg2bPVtjGJ1EYwh3oKsNkG6p/YNRk1ZGW9IRCbYfFccqH8e7Lm9JPcFZQnMOzNOr /languages/armasm.min.js
sha384-4SbTAv3AX2fuPCpSv6HW3p07YgA7hFfcwG2zJHtYv0ATIt1juD3IXj2NSYwTeIpm /languages/bash.js
sha384-83HvQQdGTWqnRLmgm19NjCb1+/awKJGytUX9sm3HJb2ddZ9Fs1Bst2bZogFjt9rr /languages/bash.min.js
sha384-WHdxyD51Y+ytDdcYGVkKHQOThUwwhLl/1GvZxHTHL4ImI4NS32L/B8bvB/1zN/Mk /languages/c.js
sha384-jtwnwOYA+K4zYN55fA4z4U0PTK5oEp4RcLYaXkYRKO3UUzge1o21ArmvKmTRdh/d /languages/c.min.js
sha384-gXeNvrs51WLYPI/WV54m5BSGtmPSOkEngcs0hrofwSIZ+uVCXW6SwnU75AWUpsiH /languages/cmake.js
sha384-NXUiKRE4iB8J7h3t1Z2aLjDRJslCWi4SWqJpec1z0Y927kNqWejg1uGaEh1P3GCK /languages/cmake.min.js
sha384-M2wpTxQe2N0750xYZ0zTinwbmjsZjdtuS7twUUP2dxtHR0YqhY3JuUFyyhANf9Uy /languages/cpp.js
sha384-/yf54L01PbO6NtVs1Pu9rgfNHbKXanLdNcGVuNa0m5+KiyH+1NpZRDK6idm5VoVl /languages/cpp.min.js
sha384-FmsaZHRekzHoNL++5S8HZFIJNK42khOgzT3VRksnYVHAURRu3hL5xMgenu9lHyAr /languages/glsl.js
sha384-ubPsF/0wBxL7zEYtpuIL27F0zYtzIZknk+3GdMEcQw1v0Td6xAJ6gDhxHy0UFhk+ /languages/glsl.min.js
sha384-cZ2d3Mo/jmTF9r2kHWcHmA8hehxX8N44UN6LSkEhaCRe6t8e9ntd5JEuafywm0aw /languages/java.js
sha384-8mc5ynnm3AlnXn8P3ccSqVAaZIDoijPM08/Hp4DABy6GMy7EHCQFwiIUoGAaGJiO /languages/java.min.js
sha384-N16TmpAW2Qx3T6s3/C0f0jweUUSh69YsJ1+AnOsAePpjmmydXF/mjeY0MZEF/cPn /languages/lua.js
sha384-WES4Ky9nlehN2gBM6oY3/98hVtWF5PZnBO+7jK8ZVKFo+QR32zhfuRK+Mv9jQsOK /languages/lua.min.js
sha384-Z4QQuz3ChYj9P02v2CDc+Y0OAn3iWXtJnyNd0Q6QqW4GV28viT3zcS9tYSmb9x1L /languages/makefile.js
sha384-pYbMiHWycMKEfJaSEsquFRDTjCY7QHvQN0FIfDK0lVMd9DPJuOA7Kq5wZGecvYwM /languages/makefile.min.js
sha384-swGDgtGOmzrsbFAaQRjzvGs0hhe0N86mfHIuisr3W9AT0hiheGyRORSGrbMDGOw5 /languages/php.js
sha384-Xd0AQIkWCEjBL8BNMtDMGVqFXkf445J6PNUJdXbh334ckjeSa90wtSUjXySuz+rt /languages/php.min.js
sha384-/AFMsGSWoas65G5mSpnY9M1vnVP/9qhQW9yGZCpgbuL36JxWKX6MABh2hj6pc4yV /languages/powershell.js
sha384-0u0NM3ve01ej9h9zRzZ/ztDGe1h07d6TStpNoJ4f/50I/vtoCsDHI2PfzDZSYz8q /languages/powershell.min.js
sha384-WNah6F2QDUbmrNCi0fSEyKJbSb01S1ijnoiwbDnegW7dm2Cz/H1CiH1HhWlUvj01 /languages/python.js
sha384-YDj7s2Wf0QEwarV3OB8lvoNJJCH032vOLMDo2HDrYiEpQ+QmKN+e++x3hElX5S+w /languages/python.min.js
sha384-nHCt5/kJd7LUp6BbVLNuUH0zziFVRS2Qqj9whqRpVpgzybI61OZlKQRPv4evHrJO /languages/ruby.js
sha384-LOFdRHZ5u+oZg5Wh8DpkiJQR/w8egcUhJJoo95XVQ846DEwuRxGUujx+tQKyqXme /languages/ruby.min.js
sha384-rCXn7K5j/lD2PrSex2XCqyLKap2Ibnsls0uQCx4ZaezI1FJ5RYvoWcsAl/v8SKlE /languages/rust.js
sha384-VTNxHMz2AmpHxzSm8SvRI0As5+wID2j2XJBFtWTic2iEK8WbXgR1fymVQS9S2DvY /languages/rust.min.js
sha384-KYOeDvyFo8fJObDV1L1aoPnfs6XG68LL6j3INM7McXyRYtBZF7DdUsNjK25dtxKo /languages/shell.js
sha384-olAuUjfRvTi/iEH4RXRpaq/G1iJGizn7OefkyJLQYuqNhh1xAV5dnUrkH/LlPd9j /languages/shell.min.js
sha384-w/OmtgUvmlKWaVatpcvuEQxP7bkJzI5gLeeQkuXjApJNiQvNmXFL2PBM5RWgKqDr /languages/sql.js
sha384-2uzCjI3OPwJce6i2hphsYs1qqTqRrDnfPXbfjZggPWy2/Lgl8gzV9Hyl0jhhoWy4 /languages/sql.min.js
sha384-9s/ZvqYSxQS2hJrT3LuFUwDyxlWEELd50mRuGXt0zzSwafBqEWPsv9xxNsZUF2W4 /languages/x86asm.js
sha384-cw6YAmvOjrczJAb9NkjJRzsXso0VEJrJsLZl8G49s9vVlIFVwG8cR6K8yvpDlGn5 /languages/x86asm.min.js
sha384-vsNrFeDnS7MJsf6v7T6ncI+8GOaIFSiXCyVwZnXK30aaXPzWzcsesp5AELUsqIzW /highlight.js
sha384-4GR4bR+UvLjmNS2ZQfT6X9OKvvtms4JS5qRR7l2uwTQypckz0qY6VN3rTpTrrQkL /highlight.min.js
```

