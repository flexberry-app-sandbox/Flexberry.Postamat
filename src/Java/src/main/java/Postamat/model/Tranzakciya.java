package Postamat.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Postamat.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: Транзакция
 */
@Entity(name = "IISPostamatТранзакция")
@Table(schema = "public", name = "Транзакция")
public class Tranzakciya {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ID")
    private Integer id;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "Время")
    private String время;

    @Column(name = "Оплата")
    private String оплата;

    @Column(name = "Сумма")
    private Double сумма;

    @OneToMany(mappedBy = "tranzakciya", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Posylka> posylkas;


    public Tranzakciya() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getID() {
      return id;
    }

    public void setID(Integer id) {
      this.id = id;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public String getВремя() {
      return время;
    }

    public void setВремя(String время) {
      this.время = время;
    }

    public String getОплата() {
      return оплата;
    }

    public void setОплата(String оплата) {
      this.оплата = оплата;
    }

    public Double getСумма() {
      return сумма;
    }

    public void setСумма(Double сумма) {
      this.сумма = сумма;
    }


}